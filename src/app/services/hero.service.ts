import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private savedHeroes: Hero[] = [new Hero('Batman', 'Dark knight'),
  new Hero('Superman', 'Man of steel'),
  new Hero('Spiderman', 'Spidy')];

  constructor() { }

  save(heroes: Hero[]) {
    this.savedHeroes = heroes;
  }

  load(): Hero[] {
    return this.savedHeroes;
  }
}
