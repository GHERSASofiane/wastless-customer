import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 
import { BookProductPage } from '../pages/book-product/book-product';
import { CancelReservationPage } from '../pages/cancel-reservation/cancel-reservation';
import { EditOfferPage } from '../pages/edit-offer/edit-offer';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { LoginPage } from '../pages/login/login';
import { OfferConsultPage } from '../pages/offer-consult/offer-consult';
import { OfferSearchPage } from '../pages/offer-search/offer-search';
import { RemoveOfferPage } from '../pages/remove-offer/remove-offer'; 
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ValidateProductPage } from '../pages/validate-product/validate-product';  
import { AuthProvider } from '../providers/auth/auth';
import { TokenInterceptorProvider } from '../providers/token-interceptor/token-interceptor';
import { IonicStorageModule } from '@ionic/storage';
import { WeatherPage } from '../pages/weather/weather';
import { UserHomeServiceProvider } from '../providers/user-home-service/user-home-service';
import { MenuPage } from '../pages/menu/menu';
import { UpdateProfileServiceProvider } from '../providers/update-profile-service/update-profile-service';
import { GetProductsProvider } from '../providers/get-products/get-products';  



@NgModule({
  declarations: [
   
    MyApp,
    HomePage, 
    BookProductPage,
    CancelReservationPage,
    EditOfferPage,
    EditProfilePage,
    LoginPage,
    OfferConsultPage,
    OfferSearchPage,
    RemoveOfferPage, 
    SignUpPage,
    ValidateProductPage,  
    WeatherPage,
    MenuPage 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    HttpClientModule,
    IonicStorageModule.forRoot(),
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    BookProductPage,
    CancelReservationPage,
    EditOfferPage,
    EditProfilePage,
    LoginPage,
    OfferConsultPage,
    OfferSearchPage,
    RemoveOfferPage, 
    SignUpPage,
    ValidateProductPage,  
    WeatherPage,
    MenuPage 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    { 
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptorProvider,
      multi: true
    },
    UserHomeServiceProvider,
    UpdateProfileServiceProvider,
    GetProductsProvider,
   
    
  ]
})
export class AppModule {
}
