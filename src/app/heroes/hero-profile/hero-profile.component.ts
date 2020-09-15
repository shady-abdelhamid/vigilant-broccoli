import { Component, OnInit } from '@angular/core';
import { Hero } from '../state/hero.model';
import { HeroesService } from '../state/heroes.service';

@Component({
  selector: 'vb-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent implements OnInit {
  hero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.hero = this.heroesService.getHero(1);
    //  .subscribe((hero) => (this.hero = hero));
  }
}
