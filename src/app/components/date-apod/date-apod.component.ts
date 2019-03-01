import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-apod',
  templateUrl: './date-apod.component.html',
  styleUrls: ['./date-apod.component.css']
})
export class DateApodComponent implements OnInit {

  pickedDate: any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
