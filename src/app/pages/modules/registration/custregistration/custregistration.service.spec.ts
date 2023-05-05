import { TestBed } from '@angular/core/testing';

import { CustregistrationService } from './custregistration.service';

describe('CustregistrationService', () => {
  let service: CustregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
