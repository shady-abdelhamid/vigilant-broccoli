import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroOrderPipe } from '../pipes/hero-order.pipe';
import { HeroSearchPipe } from '../pipes/hero-search.pipe';
import { HeroesService } from '../state/heroes.service';

import { HeroListComponent } from './hero-list.component';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroListComponent, HeroSearchPipe, HeroOrderPipe],
      providers: [HeroesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort heroes by powers', () => {
    component.toggleSort(false);
    expect(component.orderBy).toBe('powers');
  });

  it('should sort heroes by name', () => {
    component.toggleSort(true);
    expect(component.orderBy).toBe('name');
  });
});
