import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


/**
 * Generated class for the AddFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-found',
  templateUrl: 'add-found.html',
})
export class AddFoundPage {

  constructor(public navCtrl: NavController,
    public storage: Storage ,
    public navParams: NavParams) {
  }
  ionViewDidEnter(){
    this.checkAuthState();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFoundPage');
  }
  checkAuthState(){
    this.storage.get('UserIsLogin').then((UserIsLogin) => {
        if (!UserIsLogin) {
          this.navCtrl.setRoot(LoginPage);
        }   
    });
  }
}
