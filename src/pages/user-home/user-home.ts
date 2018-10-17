import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../class/user';
import { AuthProvider } from '../../providers/auth/auth';
import { UserHomeServiceProvider } from '../../providers/user-home-service/user-home-service';
import { HomePage } from '../home/home';
import { Offer } from '../class/Offer';

/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  user : User;
  products: Offer[];

  constructor(public navCtrl: NavController, private _auth:AuthProvider, private _userHome: UserHomeServiceProvider) {   
  }

  
  ionViewCanEnter()
  {
    if (this._auth.loggedIn())
    {
      this.user = this._auth.getUserDetails();
      this.offres();
      return true;
    }
    else
    {
      this.navCtrl.push(HomePage);
      return false;
    }
  }


  updateProfile(){
   
  }

  logout()
  {
  //  this.navCtrl.push(HomePage);
  }

  achats()
  {
    alert("achats");
  }

  acheter()
  {
    alert("acheter");
  }

  offres()
  {
    this._userHome.getMyProducts(this.user.userId).subscribe
      (
        res => 
        {
          console.log(res);
         
        },
        err => console.log(err)
      );
  }
 


}
