import { TestBed } from '@angular/core/testing';

import { CowService } from './cow.service';

describe('CowServiceService', () => {
  let service: CowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
