import { UserService } from './user.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from '../auth/guards/roles/role.decorator';
import {
  CreateUserRequestDto,
  ROLE,
  UpdateUserDtoRequest,
  UserResponseDto,
} from '@authorization-app/libs';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  async getAllUsers(): Promise<UserResponseDto[]> {
    // @ts-ignore
    return this.userService.getAllUsers();
  }

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserRequestDto) {
    if (!createUserDto.username) {
      throw new BadRequestException('Username is required in the request.');
    }

    if (!createUserDto.password) {
      throw new BadRequestException('Password is required in the request.');
    }

    await this.userService.createUser({
      ...createUserDto,
      roles: [...createUserDto.roles, ROLE.USER],
    });

    return { message: 'success' };
  }

  @Put('update/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.USER, ROLE.ADMIN)
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDtoRequest,
    @Req() req
  ) {
    const { user } = req;

    if (!updateUserDto || Object.keys(updateUserDto).length === 0) {
      throw new BadRequestException('No data to update was provided.');
    }

    if (user.roles.includes(ROLE.ADMIN)) {
      await this.userService.updateUser(updateUserDto, userId);
      return { message: 'success' };
    }

    if (user.sub === userId) {
      await this.userService.updateUser(updateUserDto, userId);
      return { message: 'success' };
    }

    throw new UnauthorizedException('Unauthorized access');
  }
}
