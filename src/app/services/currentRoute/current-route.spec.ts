import { TestBed } from '@angular/core/testing';

import { CurrentRoute } from './current-route';

describe('CurrentRoute', () => {
  let service: CurrentRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
