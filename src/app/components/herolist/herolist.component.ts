import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit, OnDestroy {

  heroes: Array<Hero>;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.load();
  }

  ngOnDestroy() {
    this.service.save(this.heroes);
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  removeHero(index: number) {
    console.log('Borro el hero: ' + index);
    this.heroes.splice(index, 1);
  }

  rateHero(message: any) {
    const myHero = this.heroes[message.index];
    myHero.rate = message.rate;
    this.heroes.splice(message.index, 1, myHero);
  }

}
