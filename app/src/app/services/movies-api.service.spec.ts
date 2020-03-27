import { TestBed } from '@angular/core/testing';

import { MoviesAPIService } from './movies-api.service';

describe('MoviesAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesAPIService = TestBed.get(MoviesAPIService);
    expect(service).toBeTruthy();
  });
});
