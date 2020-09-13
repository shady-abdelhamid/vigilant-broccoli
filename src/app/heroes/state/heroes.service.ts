import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Hero } from './hero.model';
import { HeroesStore } from './heroes.store';
import { HeroesQuery } from './heroes.query';

@Injectable()
export class HeroesService {
  constructor(
    private heroesStore: HeroesStore,
    private heroesQuery: HeroesQuery,
    private http: HttpClient
  ) {}

  get() {
    return this.http.get<Hero[]>('/api/heroes.json').pipe(
      tap((entities) => {
        this.heroesStore.set(entities);
      })
    );
  }

  getHero(id) {
    if (this.heroesQuery.hasEntity(id)) {
      return this.heroesQuery.getEntity(id);
    }
  }

  add(hero: Hero) {
    this.heroesStore.add(hero);
  }

  update(id, hero: Partial<Hero>) {
    this.heroesStore.update(id, hero);
  }

  remove(id: ID) {
    this.heroesStore.remove(id);
  }
}
