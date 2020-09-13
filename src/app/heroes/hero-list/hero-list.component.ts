import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vb-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  pageTitle = 'Heroes';

  heroes = [
    { name: 'MR. ROBOT', powers: 'Coding with VIM, Know Angular', rate: 4 },
    { name: 'Richard Stallman', powers: 'Freedom Protector', rate: 4 },
    {
      name: 'Tim Berners-Lee',
      powers: 'Transport Objects through HTTP',
      rate: 4,
    },
  ];

  sortBy: string = 'name' || 'power';

  constructor() {}

  ngOnInit(): void {}

  toggleSort(): void {
    console.log('TODO: toggle');
  }
}
