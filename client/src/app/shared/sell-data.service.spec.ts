import { TestBed } from '@angular/core/testing';

import { SellDataService } from './sell-data.service';

describe('SellDataService', () => {
  let service: SellDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
