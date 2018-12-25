import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/crud/lostProvider';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
/**
 * Generated class for the AddLostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-lost',
  templateUrl: 'add-lost.html',
})
export class AddLostPage {
  lostData = {
 
    title:'', 
    type:'',
    location: '', 
    details:' ' ,
    hide: 0 ,
    user_id: '' 
    
  }
  constructor(
    public LostProvider: LostProvider ,
    public storage: Storage , 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLostPage');
  }
  ionViewDidEnter(){
    this.checkAuthState();
  }
  addLost(){
    this.storage.get('userId').then((value) => {
      this.lostData.user_id=value;
   });
   this.lostData.hide=0;
    this.LostProvider.insertPosts(this.lostData).then((result)=>{
      console.log(result)
      this.navCtrl.pop()
      // let toast = this.toastCtrl.create({
      //   message: 'تم تسجيلك كمتبرع بنجاح',
      //   duration: 3000,
      //   position: 'top'
      // });
      // toast.present();
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.lost: "+ JSON.stringify(this.lostData))
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
