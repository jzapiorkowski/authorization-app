import { TestBed } from '@angular/core/testing';
import { JwtService } from './jwt.service';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { ACCESS_TOKEN } from '@authorization-app/libs';

describe('JwtService', () => {
  let jwtService: JwtService;
  let localStorageServiceMock: any;
  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  beforeEach(() => {
    const localStorageServiceSpy = { getItem: jest.fn() };

    TestBed.configureTestingModule({
      providers: [
        JwtService,
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    });

    jwtService = TestBed.inject(JwtService);
    localStorageServiceMock = TestBed.inject(LocalStorageService);
  });

  it('should return the JWT token from local storage', () => {
    localStorageServiceMock.getItem.mockReturnValue(mockToken);

    expect(jwtService.token).toEqual(mockToken);
    expect(localStorageServiceMock.getItem).toHaveBeenCalledWith(ACCESS_TOKEN);
  });

  it('should decode a valid JWT token', () => {
    localStorageServiceMock.getItem.mockReturnValue(mockToken);

    const decodedToken = jwtService.decodeToken();
    expect(decodedToken).toEqual({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022,
    });
  });

  it('should handle decoding error', () => {
    const invalidToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    localStorageServiceMock.getItem.mockReturnValue(invalidToken);

    const decodedToken = jwtService.decodeToken();

    expect(decodedToken).toBeNull();
  });
});
