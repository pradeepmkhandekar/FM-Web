import { TestBed, inject } from '@angular/core/testing';

import { HorizonapiService } from './horizonapi.service';

describe('HorizonapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorizonapiService]
    });
  });

  it('should be created', inject([HorizonapiService], (service: HorizonapiService) => {
    expect(service).toBeTruthy();
  }));
});
