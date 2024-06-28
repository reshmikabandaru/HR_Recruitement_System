import { TestBed } from '@angular/core/testing';

import { FeildsService } from './feilds.service';

describe('FeildsService', () => {
  let service: FeildsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeildsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
