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
import { AddProductProvider } from '../providers/add-product/add-product';
import { GetProductDetProvider } from '../providers/get-product-det/get-product-det';
import { DeleteProductProvider } from '../providers/delete-product/delete-product';
import { MyPubsProvider } from '../providers/my-pubs/my-pubs';
import { EditProductProvider } from '../providers/edit-product/edit-product'; 
import { ChatPage } from '../pages/chat/chat';
import { ChatProvider } from '../providers/chat/chat';
import { UserHomePage } from '../pages/user-home/user-home';



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
    SignUpPage,
    ValidateProductPage,  
    WeatherPage,
    MenuPage,
    ChatPage,
    UserHomePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    // ,{
    //   menuType: 'push',
    //   platforms: {
    //     ios: {
    //       menuType: 'overlay',
    //     }
    //   }
    // }
    
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
    SignUpPage,
    ValidateProductPage,  
    WeatherPage,
    MenuPage,
    ChatPage,
    UserHomePage

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
    AddProductProvider,
    GetProductDetProvider,
    DeleteProductProvider,
    MyPubsProvider,
    EditProductProvider,
    ChatProvider,
   
    
  ]
})
export class AppModule {
}
