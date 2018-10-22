import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { User } from '../class/user';
import { AuthProvider } from '../../providers/auth/auth';
import { UserHomeServiceProvider } from '../../providers/user-home-service/user-home-service';
import { HomePage } from '../home/home';
import { Offer } from '../class/Offer'; 
import { Reponse } from '../class/reponse';

 

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  user : User = new User("","");
  products: Offer[];
  pages = [];

  constructor(public navCtrl: NavController, private _auth:AuthProvider, private _userHome: UserHomeServiceProvider) {   
  }

  
  

  ionViewCanEnter()
  {
     
    if (this._auth.loggedIn())
    {
    /** 
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');                                    
    this.user = helper.decodeToken(token);
    */
    this.user = this._auth.getUser(); 
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
