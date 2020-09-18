import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../state/hero.model';

@Pipe({
  name: 'heroSearch',
})
export class HeroSearchPipe implements PipeTransform {
  transform(heroes: Hero[], searchKeyword: string): unknown {
    if (!heroes) {
      return [];
    }
    if (!searchKeyword) {
      return heroes;
    }
    searchKeyword = searchKeyword.toLocaleLowerCase();

    return heroes.filter((hero) => {
      const { name, powers } = hero;
      const joinedValues = `${name} || ${powers}`;
      return joinedValues.toLocaleLowerCase().includes(searchKeyword);
    });
  }
}
