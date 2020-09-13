import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

@NgModule({
  declarations: [HeroListComponent, HeroProfileComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
