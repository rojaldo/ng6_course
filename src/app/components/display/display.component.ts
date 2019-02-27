import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() myContent: string;

  constructor(public service: CalculatorService) { }

  ngOnInit() {
    this.myContent = this.service.display;
  }

}
