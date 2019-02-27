import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() remove = new EventEmitter<number>();
  @Output() rating = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeHero(index: number) {
    this.remove.emit(index);
  }
  rate(myIndex: number, myRate: number) {
    const message = {index: myIndex, rate: myRate};
    this.rating.emit(message);
  }

}
