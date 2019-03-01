import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  user: User;
  result; any;
  responded: boolean = false;
  public model: any;
  myclass: boolean = true;

  countries: string[] = [];

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.countries.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


  constructor(public service: RequestService) { }

  ngOnInit() {
    this.user = new User('', '', '');
    this.getApiInfo();

  }

  getApiInfo(url?: string) {
    if (!url) {
      url = 'https://restcountries.eu/rest/v2/all';
    }
    this.service.getRequest(url).subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }

  getClass() {
    if (this.myclass) {
      return 'btn btn-primary';
    } else {
      return 'btn btn-danger';
    }
  }

  changeClass() {
    this.myclass = !this.myclass;
  }
  processResult(data: any) {
    console.log(data);
    this.result = data;
    for (const item of this.result) {
      this.countries.push(item.name);
    }
    this.responded = true;
  }

  processError(error: any) {
  }

  processFinal() { }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }
}