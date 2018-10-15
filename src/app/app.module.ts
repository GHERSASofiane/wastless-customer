import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddOfferPage } from '../pages/add-offer/add-offer';
import { BookProductPage } from '../pages/book-product/book-product';
import { CancelReservationPage } from '../pages/cancel-reservation/cancel-reservation';
import { EditOfferPage } from '../pages/edit-offer/edit-offer';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { LoginPage } from '../pages/login/login';
import { OfferConsultPage } from '../pages/offer-consult/offer-consult';
import { OfferSearchPage } from '../pages/offer-search/offer-search';
import { RemoveOfferPage } from '../pages/remove-offer/remove-offer';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ValidateProductPage } from '../pages/validate-product/validate-product';
import { ViewHistoryPage } from '../pages/view-history/view-history';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddOfferPage,
    BookProductPage,
    CancelReservationPage,
    EditOfferPage,
    EditProfilePage,
    LoginPage,
    OfferConsultPage,
    OfferSearchPage,
    RemoveOfferPage,
    SignOutPage,
    SignUpPage,
    ValidateProductPage,
    ViewHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddOfferPage,
    BookProductPage,
    CancelReservationPage,
    EditOfferPage,
    EditProfilePage,
    LoginPage,
    OfferConsultPage,
    OfferSearchPage,
    RemoveOfferPage,
    SignOutPage,
    SignUpPage,
    ValidateProductPage,
    ViewHistoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
