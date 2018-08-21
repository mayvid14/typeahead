import { TestBed, inject } from '@angular/core/testing';

import { ToFetchService } from './to-fetch.service';

describe('ToFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToFetchService]
    });
  });

  it('should be created', inject([ToFetchService], (service: ToFetchService) => {
    expect(service).toBeTruthy();
  }));
});
