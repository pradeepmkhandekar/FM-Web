import { TestBed, inject } from '@angular/core/testing';

import { PersonalserviceService } from './personalservice.service';

describe('PersonalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalserviceService]
    });
  });

  it('should be created', inject([PersonalserviceService], (service: PersonalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
