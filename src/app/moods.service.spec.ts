import { TestBed } from '@angular/core/testing';

import { MoodsService } from './moods.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MoodsService = TestBed.get(MoodsService);
    expect(service).toBeTruthy();
  });
});
