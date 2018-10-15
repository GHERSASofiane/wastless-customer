import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../class/user';
import { Reponse } from '../class/reponse';
import { Http } from '@angular/http';
import { UserHomePage } from '../user-home/user-home';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  private user = new User("","");
  private reponse : Reponse;
  private url = "https://blowless.herokuapp.com/signup";
  private selectedFile : File = null;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }


  onFileSelected(event)
  {
    
    this.selectedFile = <File> event.target.files[0];
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.selectedFile);
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.user.userPicture = btoa(binaryString);
   }

  logUp(){
  
  this.http.post(this.url, JSON.stringify(this.user))
  .subscribe(
              res =>
               {
                   this.reponse = res.json();
                       if(this.reponse.status == "ok")
                       {
                         this.user = this.reponse.reponse;
                         this.navCtrl.push(UserHomePage, {user : this.user});
                       }
                       else
                       alert(this.reponse.message);
               },
               error => {console.log(error)}
              );

}

}




