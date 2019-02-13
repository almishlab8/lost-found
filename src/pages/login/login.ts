import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import { SignupPage } from '../signup/signup';
import { SettingsPage } from '../settings/settings';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string = '';
  password:string = '';

  errorMsg:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
    private toastCtrl: ToastController,
    public storage: Storage , public http: Http,
    public alertCtrl: AlertController ,
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['تم']
    });
    alert.present();
  }

  myLogIn(){
 
    if (this.email.trim() !==''    ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.errorFunc('ادخل كلمة السر .. !')
 
      }else{
 
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
           this.getUserInfo();
            console.log(result);
            this.navCtrl.setRoot(SettingsPage);
            let toast = this.toastCtrl.create({
              message: 'اهلا بك مجددا  ',
              duration: 3000,
              position: 'top'
            });
            toast.present();
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('! يرجى التاكد من الايميل و كلمة السر الخاصة بك ')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('كلمة السر خطآ ..! ')
   
    }
 
 

}





myLogOut(){
  this.authService.logout();
  this.navCtrl.setRoot(SettingsPage);
}

getUserInfo(){
  return new Promise((resolve, reject) => {
    this.storage.get('token').then((value) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Bearer '+value);

      console.log('value: ' + value);
 
      this.http.get(apiKey+'/users', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          this.storage.set('userId', data.id);
          console.log('id: ' + data.id);
          this.storage.set('userName', data.name);
          console.log('name: ' + data.name);
          resolve(data);
        }, (err) => {
          reject(err);
        }); 
    }) 

  });
}
register(){
  this.navCtrl.push(SignupPage)
}
}
