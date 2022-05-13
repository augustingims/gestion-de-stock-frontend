import { TestBed } from '@angular/core/testing';

import { UserRouterAccesService } from './user-router-acces.service';

describe('UserRouterAccesService', () => {
  let service: UserRouterAccesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRouterAccesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
