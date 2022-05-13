import { TestBed } from '@angular/core/testing';

import { AuthJwtService } from './auth-jwt.service';

describe('AuthJwtService', () => {
  let service: AuthJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
