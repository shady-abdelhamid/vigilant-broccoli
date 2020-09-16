import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxSwitchInputModule } from "@ngx-tiny/switch-input/ngx-switch-input.module";
import { HeroOrderPipe } from "../hero-order.pipe";
import { HeroSearchPipe } from "../hero-search.pipe";
import { HeroesService } from "../state/heroes.service";

import { HeroListComponent } from "./hero-list.component";

describe("HeroListComponent", () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxSwitchInputModule],
      declarations: [HeroListComponent, HeroSearchPipe, HeroOrderPipe],
      providers: [HeroesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
