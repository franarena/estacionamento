import { TestBed } from '@angular/core/testing';

import { ParkedCarsService } from './parked-cars.service';

describe('ParkedCarsService', () => {
  let service: ParkedCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkedCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
