import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

export enum State {
  init, firstFigure, secondFigure, result
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() signal: EventEmitter<string> = new EventEmitter<string>();

  constructor(public service: CalculatorService) { }

  ngOnInit() {
  }

  handleSymbol(value: string) {
    switch (this.service.currentState) {
      case (State.init):
        return;
      case (State.firstFigure):
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.service.operator = value;
          this.service.currentState = State.secondFigure;
          this.service.display += String(value);
          this.signal.emit(this.service.display);
        }
        break;
      case (State.secondFigure):
        if (value === '=') {
          this.service.result = this.service.resolve();
          this.service.display = this.service.display + String(value) + this.service.result;
          this.signal.emit(this.service.display);
          this.service.currentState = State.result;
        }
    }
  }

  handleNumber(value: number) {
    if (this.service.currentState === State.init) {
      this.service.firstFigure = value;
      this.service.currentState = State.firstFigure;
    } else if (this.service.currentState === State.firstFigure) {
      this.service.firstFigure = this.service.firstFigure * 10 + value;
    } else if (this.service.currentState === State.secondFigure) {
      this.service.secondFigure = this.service.secondFigure * 10 + value;
    } else if (this.service.currentState === State.result) {
      this.service.firstFigure = value;
      this.service.secondFigure = 0;
      this.service.operator = '';
      this.service.result = 0;
      this.service.display = '';
      this.signal.emit(this.service.display);
      console.log('Display: ' + this.service.display);
      this.service.currentState = State.firstFigure;
    } else {
      return;
    }
    this.service.display += String(value);
    this.signal.emit(this.service.display);
  }


}
