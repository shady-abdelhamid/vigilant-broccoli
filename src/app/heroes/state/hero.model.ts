export interface Hero {
  id: number | string;
  name: string;
  description: string;
  powers: string;
  rate: number;
}

export function createHero(params: Partial<Hero>): Hero {
  return {} as Hero;
}
