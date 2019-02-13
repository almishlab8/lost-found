import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoundProvider } from '../../providers/crud/foundProvider';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

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
  foundData = {
 
    title:'', 
    type:'',
    location: '', 
    details:' ' ,
    hide: 0 ,
    user_id: '' 
    
  }
  constructor(
    public FoundProvider: FoundProvider ,
    public storage: Storage , 
    private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad addFoundPage');
  }
  ionViewDidEnter(){
    this.checkAuthState();
  }
  addFound(){
    this.storage.get('userId').then((value) => {
      this.foundData.user_id=value;
   });
   this.foundData.hide=0;
    this.FoundProvider.insertPosts(this.foundData).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
      let toast = this.toastCtrl.create({
        message: 'تم الاضافة  بنجاح',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.Found: "+ JSON.stringify(this.foundData))
    })
    
   
   }
   checkAuthState(){
    this.storage.get('UserIsLogin').then((UserIsLogin) => {
        if (!UserIsLogin) {
          this.navCtrl.setRoot(LoginPage);
        }   
    });
  }


}
