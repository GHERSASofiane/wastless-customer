import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { AlertController } from 'ionic-angular'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  UserMail = '';
  UserPassword = ''; 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
     
    console.log("ghersa");
  }

  /**
   * name
   */
  public showAlert(): void {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  public appelget(): void {
    

    alert('ghersa');

  //   this.http.get('https://wastless.herokuapp.com/OfferSearch').subscribe(
  //     res => console.log(res.json().results[1])
  //   );
  }

}
