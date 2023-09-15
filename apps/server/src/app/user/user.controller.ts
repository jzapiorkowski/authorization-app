import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UpdateUserDto } from '../dto/user.dto';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/guards/roles/role.decorator';
import { ROLE } from '../auth/guards/roles/role.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Put('update/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.USER, ROLE.ADMIN)
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req
  ) {
    const { user } = req;

    if (user.roles.includes(ROLE.ADMIN)) {
      return this.userService.updateUser(updateUserDto, userId);
    }

    if (user.sub === userId) {
      return this.userService.updateUser(updateUserDto, userId);
    }

    throw new UnauthorizedException('Unauthorized access');
  }

  @Get('')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
