import { TestBed } from '@angular/core/testing';

import { PatServiceService } from './pat-service.service';

describe('PatServiceService', () => {
  let service: PatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
