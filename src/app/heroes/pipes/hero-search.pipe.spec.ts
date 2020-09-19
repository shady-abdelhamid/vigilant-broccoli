import { Hero } from '../state/hero.model';
import { HeroSearchPipe } from './hero-search.pipe';

describe('HeroSearchPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if no array found', () => {
    const pipe = new HeroSearchPipe();
    expect(pipe.transform(null, '')).toEqual([]);
  });

  it('should return same array if no searchKeyword found', () => {
    const pipe = new HeroSearchPipe();
    const arr: Hero[] = [
      { id: 1, name: 'a', powers: 'a', description: 'a', rate: 1 },
      { id: 1, name: 'b', powers: 'b', description: 'b', rate: 2 },
    ];
    expect(pipe.transform(arr, null)).toEqual(arr);
  });

  it('should return filtered array', () => {
    const pipe = new HeroSearchPipe();
    const arr: Hero[] = [
      { id: 1, name: 'a', powers: 'a', description: 'a', rate: 1 },
      { id: 1, name: 'b', powers: 'b', description: 'b', rate: 2 },
    ];
    arr.shift();
    expect(pipe.transform(arr, 'b')).toEqual(arr);
  });
});
