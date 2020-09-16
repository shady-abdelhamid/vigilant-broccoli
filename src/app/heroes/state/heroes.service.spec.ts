import { TestBed, inject } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService],
    });
  });
  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));
});
