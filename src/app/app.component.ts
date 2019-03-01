import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  myvar = true;
  statesStrings = ['form', 'apod', 'beers', 'heroes', 'calculator'];
  samples: string[] = ['Formulario', 'Apod', 'Cervezas', 'Lista de héroes', 'Calculadora'];
  currentSample: number = 0;

  showSample(index: number) {
    this.currentSample = index;
  }
}
