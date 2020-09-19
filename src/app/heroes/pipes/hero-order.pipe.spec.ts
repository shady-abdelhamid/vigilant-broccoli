import { Hero } from '../state/hero.model';
import { HeroOrderPipe } from './hero-order.pipe';

describe('HeroOrderPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroOrderPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if no array found', () => {
    const pipe = new HeroOrderPipe();
    expect(pipe.transform(null, '')).toEqual([]);
  });

  it('should return same array if no orderBy found', () => {
    const pipe = new HeroOrderPipe();
    const arr: Hero[] = [
      { id: 1, name: 'a', powers: 'a', description: 'a', rate: 1 },
      { id: 1, name: 'b', powers: 'b', description: 'b', rate: 2 },
    ];
    expect(pipe.transform(arr, null)).toEqual(arr);
  });

  it('should return array ordered by name', () => {
    const pipe = new HeroOrderPipe();
    const arr: Hero[] = [
      { id: 1, name: 'a', powers: 'b', description: 'a', rate: 1 },
      { id: 1, name: 'b', powers: 'a', description: 'b', rate: 2 },
    ];
    expect(pipe.transform(arr, 'name')).toEqual(arr);
  });

  it('should return array ordered by powers', () => {
    const pipe = new HeroOrderPipe();
    const arr: Hero[] = [
      { id: 1, name: 'a', powers: 'b', description: 'a', rate: 1 },
      { id: 1, name: 'b', powers: 'a', description: 'b', rate: 2 },
    ];
    expect(pipe.transform(arr, 'powers')).toEqual(arr.reverse());
  });
});
