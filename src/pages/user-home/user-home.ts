import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { User } from '../class/user';
import { AuthProvider } from '../../providers/auth/auth';
import { UserHomeServiceProvider } from '../../providers/user-home-service/user-home-service';
import { HomePage } from '../home/home';
import { Offer } from '../class/Offer';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Reponse } from '../class/reponse';

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

  user : User = new User("","");
  products: Offer[];

  constructor(public navCtrl: NavController, private _auth:AuthProvider, private _userHome: UserHomeServiceProvider, private _store:Storage) {   
  }

  
  

  ionViewCanEnter()
  {
    if (this._auth.loggedIn())
    {
     const helper = new JwtHelperService();
    
    let token = localStorage.getItem('token');                                    
    this.user = helper.decodeToken(token);
    console.log(this.user);                                    
    alert(this.user.userId);
    this.offres();
      return true;
    }
    else
    {
     
    this.navCtrl.push(HomePage);
    return false;
    }
  }

  ionViewDidLeave()
  {
    localStorage.removeItem('token');
  }

  ionViewWillLeave()
  {
    localStorage.removeItem('token');
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
   
   
    this._userHome.getMyProducts().subscribe
      (
        res => 
        {
          let rep = new Reponse("",""); 
          rep = res;
          this.products = rep.reponse;
         
        },
        err => console.log(err)
      );
     
  }
 


}
