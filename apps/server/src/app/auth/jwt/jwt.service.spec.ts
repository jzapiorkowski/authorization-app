import { JwtService } from './jwt.service';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtService as NestJwtService } from '@nestjs/jwt';

describe('JwtService', () => {
  let jwtService: JwtService;
  let nestJwtService: NestJwtService;
  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  beforeEach(async () => {
    const nestJwtServiceSpy = { signAsync: jest.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtService,
        {
          provide: NestJwtService,
          useValue: nestJwtServiceSpy,
        },
      ],
    }).compile();

    jwtService = module.get<JwtService>(JwtService);
    nestJwtService = module.get<NestJwtService>(NestJwtService);
  });

  it('should generate a token', async () => {
    const payload = { sub: '1234567890' };

    (nestJwtService.signAsync as jest.Mock).mockResolvedValue(mockToken);

    const result = await jwtService.generateToken(payload);

    expect(result).toBe(mockToken);
    expect(nestJwtService.signAsync).toHaveBeenCalledWith(payload);
  });
});
