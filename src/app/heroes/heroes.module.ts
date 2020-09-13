import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './state/heroes.service';

@NgModule({
  declarations: [HeroListComponent, HeroProfileComponent],
  imports: [CommonModule, HttpClientModule, HeroesRoutingModule],
  providers: [HeroesService],
})
export class HeroesModule {}
