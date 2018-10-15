import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidateProductPage } from './validate-product';

@NgModule({
  declarations: [
    ValidateProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ValidateProductPage),
  ],
})
export class ValidateProductPageModule {}
