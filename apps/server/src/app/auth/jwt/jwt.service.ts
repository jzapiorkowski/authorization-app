import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private nestJwtService: NestJwtService) {}

  async generateToken(payload: any): Promise<string> {
    return this.nestJwtService.signAsync(payload);
  }
}
