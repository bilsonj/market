import { TestBed } from '@angular/core/testing';

import { ApicheckService } from './apicheck.service';

describe('ApicheckService', () => {
  let service: ApicheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
