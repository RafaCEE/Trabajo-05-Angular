import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Nice', score: 13},
      { id: 2, name: 'Bombasto', score: 74 },
      { id: 3, name: 'Celeritas', score: 51 },
      { id: 4, name: 'Magneta', score: 25 },
      { id: 5, name: 'RubberMan', score: 58 },
      { id: 6, name: 'Dynama', score: 1 },
      { id: 7, name: 'Dr. IQ', score: 47 },
      { id: 8, name: 'Magma', score: 81 },
      { id: 9, name: 'Tornado', score: 91 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}