import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isLogin:boolean=false;
  userName:any;
  constructor( public authService: AuthProvider ,public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
   
    this.storage.get('UserIsLogin').then((UserIsLogin) => {
       console.log('UserIsLogin:: '+UserIsLogin);
      if (!UserIsLogin) {this.isLogin=false}
      else{this.isLogin=true}
    }) 
    this.storage.get('userName').then((userName) => {
   this.userName=userName;
    }) 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  signup(){
    this.navCtrl.push(SignupPage)
  }
  login(){
    this.navCtrl.push(LoginPage)
  }
  LogOut(){
    this.storage.set('token', '');
    this.isLogin=false;
    this.storage.set('UserIsLogin', false);
    this.storage.set('userId', '');
    this.storage.set('userName', '');
    this.navCtrl.setRoot(HomePage);
  }
}
