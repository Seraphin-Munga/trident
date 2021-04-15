import { TestBed } from '@angular/core/testing';

import { PackagesResourceService } from './packages-resource.service';

describe('PackagesResourceService', () => {
  let service: PackagesResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagesResourceService);
  });

  it('should be created', async() => {
    await expect(service).toBeTruthy();
  });
});
