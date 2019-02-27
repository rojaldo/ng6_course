import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/display/display.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CalculatorService } from './services/calculator.service';
import { HerolistComponent } from './components/herolist/herolist.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { HeroService } from './services/hero.service';
import { HeightPipe } from './pipes/height.pipe';
import { RestsampleComponent } from './components/restsample/restsample.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/request.service';
import { ApodComponent } from './components/apod/apod.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    ButtonsComponent,
    HerolistComponent,
    ListComponent,
    FormComponent,
    HeightPipe,
    RestsampleComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule
  ],
  providers: [CalculatorService, HeroService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
