import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() signal = new EventEmitter<Hero>();
  newHeroName: string = '';
  newHeroDescription: string = '';
  newHeroHeight: number = 180;
  heroRate: number = 5;
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.signal.emit(new Hero(this.newHeroName, this.newHeroDescription, this.heroRate));
    this.newHeroName = '';
  }

}
