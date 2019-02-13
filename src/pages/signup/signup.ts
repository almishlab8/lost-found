import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
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
    private toastCtrl: ToastController,
    public alertCtrl: AlertController , 
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: '!انتبه',
      subTitle: message,
      buttons: ['حسناً']
    });
    alert.present();
  }



  Rgister(){

    let email_already_in_use = this.toastCtrl.create({
      message: 'هذا المستخدم موجود مسبقاً ..!',
      duration: 3000,
      position: 'top'
      
    });
    let weak_password = this.toastCtrl.create({
      message: 'كلمة المرور ضعيفة ..!',
      duration: 3000,
      position: 'top'
    });
    let invalid_email = this.toastCtrl.create({
      message: 'تأكد من البريد الالكتروني بشكل صحيح ..!',
      duration: 3000,
      position: 'top'
    });
 
    if (this.email.trim()  &&  this.name.trim() ) {    
      
    
       
      if (this.password.length < 6) {
        weak_password.present();
 
      }else{
 
        let credentials = {
          email: this.email,
          name: this.name,
            password: this.password
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            if (result['email']=="The email has already been taken.") {
              email_already_in_use.present();
            }else{
                   if (result['email']=="The email must be a valid email address.") {
              invalid_email.present();
            }else{this.navCtrl.setRoot(LoginPage);}
            
            }
       
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('يرجى ملئ جميع الحقول')
   
    }
 

}








}