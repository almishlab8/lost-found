import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { DevelopersPage } from '../developers/developers';
import { ContactPage } from '../contact/contact';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isLogin:boolean=false;
  userName:any;
  constructor( public authService: AuthProvider ,
    public storage: Storage,
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
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
    this.navCtrl.setRoot(SettingsPage);
  }



  contactModal(){
    let modal = this.modalCtrl.create(ContactPage);
    modal.present();
  }
  aboutModal(){
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
  developerModal(){
    let modal = this.modalCtrl.create(DevelopersPage);
    modal.present();
  }
}
