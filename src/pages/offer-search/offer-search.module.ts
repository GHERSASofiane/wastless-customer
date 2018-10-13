import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferSearchPage } from './offer-search';
import { WeatherPage } from '../weather/weather';

@NgModule({
  declarations: [
    OfferSearchPage,
    WeatherPage
  ],
  imports: [
    IonicPageModule.forChild(OfferSearchPage),
  ],
})
export class OfferSearchPageModule {}
