import { TestBed } from '@angular/core/testing';

import { IpService } from './ip-service.service';

describe('IpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpService = TestBed.get(IpService);
    expect(service).toBeTruthy();
  });
});
