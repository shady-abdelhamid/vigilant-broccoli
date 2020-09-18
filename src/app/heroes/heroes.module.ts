import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from './state/heroes.service';
import { FormsModule } from '@angular/forms';
import { HeroSearchPipe } from './hero-search.pipe';
import { HeroOrderPipe } from './hero-order.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroProfileComponent,
    HeroSearchPipe,
    HeroOrderPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    HeroesRoutingModule,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
