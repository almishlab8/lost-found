import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name:string = '';
  password:string = '';
  email:string = '';
  errorMsg:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
   
    public alertCtrl: AlertController , 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myRegister(){
 
    if (this.email.trim()  &&  this.name.trim()  && this.password.trim() ) {    
      
    
       
      if (this.password.trim()  === '') {
        this.errorFunc('يرجى كتابة كلمة السر الخاصة بك ')
 
      }else{
 
        let credentials = {
          email: this.email,
          name: this.name,
            password: this.password
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            this.navCtrl.setRoot(LoginPage);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('كلمة السر خطآ ..! ')
   
    }
 

}



}
