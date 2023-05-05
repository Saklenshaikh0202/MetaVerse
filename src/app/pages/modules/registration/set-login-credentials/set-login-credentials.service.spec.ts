import { TestBed } from '@angular/core/testing';

import { SetLoginCredentialsService } from './set-login-credentials.service';

describe('SetLoginCredentialsService', () => {
  let service: SetLoginCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetLoginCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
