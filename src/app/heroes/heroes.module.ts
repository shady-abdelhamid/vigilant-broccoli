import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from './state/heroes.service';
import { NgxSwitchInputModule } from '@ngx-tiny/switch-input';
import { FormsModule } from '@angular/forms';
import { HeroSearchPipe } from './hero-search.pipe';
import { HeroOrderPipe } from './hero-order.pipe';

@NgModule({
  declarations: [HeroListComponent, HeroProfileComponent, HeroSearchPipe, HeroOrderPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxSwitchInputModule,
    HeroesRoutingModule,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}
