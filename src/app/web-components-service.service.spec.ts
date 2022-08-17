import { TestBed } from '@angular/core/testing';

import { WebComponentsServiceService } from './web-components-service.service';

describe('WebComponentsServiceService', () => {
  let service: WebComponentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebComponentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
