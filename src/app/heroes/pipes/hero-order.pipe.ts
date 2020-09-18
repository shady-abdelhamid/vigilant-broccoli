import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../state/hero.model';

@Pipe({
  name: 'heroOrder',
})
export class HeroOrderPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: string): unknown {
    if (!heroes) {
      return [];
    }
    if (!orderBy) {
      return heroes;
    }
    return heroes.sort((a, b) => {
      if (orderBy === 'name') {
        return a.name < b.name ? -1 : 1;
      } else {
        return a.powers < b.powers ? -1 : 1;
      }
    });
  }
}
