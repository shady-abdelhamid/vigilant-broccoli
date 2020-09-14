import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../state/hero.model';
import { HeroesService } from '../state/heroes.service';

@Component({
  selector: 'vb-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  pageTitle = 'Heroes';

  heroes$: Observable<Hero[]>;

  sortBy: string = 'name' || 'power';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroesService.get();
  }

  toggleSort(event): void {
    console.log('TODO: toggle');
  }
}
