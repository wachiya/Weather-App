import { TestBed } from '@angular/core/testing';

import { ActivitiesService } from './activities.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ActivitiesService = TestBed.get(ActivitiesService);
    expect(service).toBeTruthy();
  });
});
