import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveOfferPage } from './remove-offer';

@NgModule({
  declarations: [
    RemoveOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveOfferPage),
  ],
})
export class RemoveOfferPageModule {}
