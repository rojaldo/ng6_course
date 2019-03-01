import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {

  result: any;
  cards: Card[] = new Array<Card>();

  constructor(public service: RequestService) { }

  ngOnInit() {
    this.getApiInfo();
  }

  getApiInfo() {
    this.service.getRequest('https://opentdb.com/api.php?amount=10').subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  processResult(data: any) {
    console.log(data);
    this.result = data;
    for (const card of this.result.results) {
      this.cards.push(new Card(card));
    }
  }

  processError(error: any) {
  }

  processFinal() {}

}
