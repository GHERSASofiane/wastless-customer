import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpdateProfileServiceProvider } from '../../providers/update-profile-service/update-profile-service';
import { User } from '../class/user';
import { UserHomePage } from '../user-home/user-home';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  private user = new User("","");
  private selectedFile : File = null;

  
  constructor(private _editProfile: UpdateProfileServiceProvider, public navCtrl: NavController, private _auth: AuthProvider) {
  
  }

  ionViewWillEnter() {
   // console.log('ionViewDidLoad InscriptionPage');
    this.user = this._auth.getUser();
    
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

   EditProfile(){
  
    
    this._editProfile.updateProfile(this.user).subscribe
      (
        res => 
        {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.navCtrl.push(UserHomePage);
        },
        err => console.log(err)
      );


}

}
