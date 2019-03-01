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
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { EmbedVideo } from 'ngx-embed-video';
import { DateApodComponent } from './components/date-apod/date-apod.component';
import { TabsApodComponent } from './components/tabs-apod/tabs-apod.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import {UIRouterModule} from "@uirouter/angular";

const formState = { name: 'form', url: '/form',  component: FormValidationComponent };
const apodState = { name: 'apod', url: '/apod',  component: TabsApodComponent };
const beerState = { name: 'beers', url: '/beers',  component: RestsampleComponent };
const heroState = { name: 'heroes', url: '/heroes',  component: HerolistComponent };
const calculatorState = { name: 'calculator', url: '/calculator',  component: CalculatorComponent };

const statesArray = [formState, apodState, beerState, heroState, calculatorState];

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
    ApodComponent,
    DateApodComponent,
    TabsApodComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule, NgbModule,
    FormsModule, HttpClientModule,
    YoutubePlayerModule, EmbedVideo.forRoot(),
    UIRouterModule.forRoot({ states: statesArray, useHash: true })
  ],
  providers: [CalculatorService, HeroService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
