import { TestBed } from '@angular/core/testing';

import { DocDerviceService } from './doc-dervice.service';

describe('DocDerviceService', () => {
  let service: DocDerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocDerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
