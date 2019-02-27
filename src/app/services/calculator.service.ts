import { Injectable } from '@angular/core';
export enum State {
  init, firstFigure, secondFigure, result
}
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  currentState: number = State.init;
  firstFigure: number = 0;
  secondFigure: number = 0;
  operator: string = '';
  result: number = 0;
  display: string = '';

  constructor() { }

  resolve(): number {
    switch (this.operator) {
      case ('+'):
        return this.firstFigure + this.secondFigure;
      case ('-'):
        return this.firstFigure - this.secondFigure;
      case ('*'):
        return this.firstFigure * this.secondFigure;
      case ('/'):
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }
}
