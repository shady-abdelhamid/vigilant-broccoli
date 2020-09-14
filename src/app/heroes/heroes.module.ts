import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from './state/heroes.service';
import { NgxSwitchInputModule } from '@ngx-tiny/switch-input';

@NgModule({
  declarations: [HeroListComponent, HeroProfileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    NgxSwitchInputModule,
    HeroesRoutingModule,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
