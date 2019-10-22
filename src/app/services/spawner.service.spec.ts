import { TestBed } from '@angular/core/testing';

import { SpawnerService } from './spawner.service';

describe('SpawnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpawnerService = TestBed.get(SpawnerService);
    expect(service).toBeTruthy();
  });
});
