import { EncryptionService } from './encryption.service';
import * as bcrypt from 'bcrypt';

describe('EncryptionService', () => {
  let encryptionService: EncryptionService;
  const password = 'testPassword';

  beforeEach(() => {
    encryptionService = new EncryptionService();
  });

  it('should hash a password', async () => {
    const hashedPassword = await encryptionService.hashPassword(password);

    expect(hashedPassword).not.toEqual(password);
    expect(hashedPassword.length).toBeGreaterThan(0);
  });

  describe('checkPassword', () => {
    it('should return true when password matches hash', async () => {
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await encryptionService.checkPassword(
        password,
        hashedPassword
      );

      expect(result).toBeTruthy();
    });

    it('should return false when password does not match hash', async () => {
      const incorrectPassword = 'incorrectPassword';
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await encryptionService.checkPassword(
        incorrectPassword,
        hashedPassword
      );

      expect(result).toBeFalsy();
    });
  });
});
