import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should set an item in local storage', () => {
    localStorageService.setItem('key', 'value');
    const storedValue = localStorage.getItem('key');
    expect(storedValue).toEqual('value');
  });

  it('should get an item from local storage', () => {
    localStorage.setItem('key', 'value');
    const retrievedValue = localStorageService.getItem('key');
    expect(retrievedValue).toEqual('value');
  });

  it('should remove an item from local storage', () => {
    localStorage.setItem('key', 'value');
    localStorageService.removeItem('key');
    const retrievedValue = localStorage.getItem('key');
    expect(retrievedValue).toBeNull();
  });
});
