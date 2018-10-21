import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { UserHomePage } from '../user-home/user-home';
import { AddOfferPage } from '../add-offer/add-offer';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pages = [];
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private _auth: AuthProvider, private _appCtrl: App) {
  }

  

  ionViewWillEnter()
  {
    if(this._auth.loggedIn)
    {
      this.pages = [
        {title: 'edit profile', page: EditProfilePage },
        {title: 'addProduct', page: AddOfferPage }
        
        
      ];
    this.openPage(UserHomePage);
    }
    else
    {
      this._appCtrl.getRootNav().setRoot(HomePage)
    }
  }

  openPage(page)
  {
    this.nav.setRoot(page);
  }
}

