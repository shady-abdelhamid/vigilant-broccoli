import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Hero } from './hero.model';
import { HeroesStore } from './heroes.store';
import { HeroesQuery } from './heroes.query';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService {
  constructor(
    private heroesStore: HeroesStore,
    private heroesQuery: HeroesQuery,
    private http: HttpClient
  ) {}

  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/heroes.json').pipe(
      tap((entities) => {
        this.heroesStore.set(entities);
      })
    );
  }

  getHero(id): Hero {
    if (this.heroesQuery.hasEntity(id)) {
      return this.heroesQuery.getEntity(id);
    }
  }

  add(hero: Hero): void {
    this.heroesStore.add(hero);
  }

  update(id, hero: Partial<Hero>): void {
    this.heroesStore.update(id, hero);
  }

  remove(id: ID): void {
    this.heroesStore.remove(id);
  }
}
