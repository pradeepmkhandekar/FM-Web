import { TestBed, inject } from '@angular/core/testing';

import { FmserviceService } from './fmservice.service';

describe('FmserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FmserviceService]
    });
  });

  it('should be created', inject([FmserviceService], (service: FmserviceService) => {
    expect(service).toBeTruthy();
  }));
});
