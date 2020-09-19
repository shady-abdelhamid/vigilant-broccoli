import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../state/hero.model';
import { HeroesService } from '../state/heroes.service';

@Component({
  selector: 'vb-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.hero = this.heroesService.getHero(id);
    }
  }
}
