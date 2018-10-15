import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookProductPage } from './book-product';

@NgModule({
  declarations: [
    BookProductPage,
  ],
  imports: [
    IonicPageModule.forChild(BookProductPage),
  ],
})
export class BookProductPageModule {}
