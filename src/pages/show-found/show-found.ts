import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FoundProvider } from '../../providers/crud/foundProvider';

/**
 * Generated class for the ShowFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-found',
  templateUrl: 'show-found.html',
})
export class ShowFoundPage {
  type: any;
  myData: any;
  comments=false;
  AuthState=false;

  showId=0;
  internet=false;
  commentData = {
    comment:'', 
    found_id:'',
    hide: 0 ,
    user_id: '' 
  }
  myComments: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage , 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
     public FoundProvider:FoundProvider
    ) {
    this.type = this.navParams.get('type');
  }
  ionViewDidEnter(){
    this.checkAuthState();
  }
  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "يرجى الانتضار ... يعتمد على سرعة الانترنيت لديك",});
    loader.present();
    
      setTimeout(() => {
        if (this.internet == false) {
           loader.dismiss();
         this.noInternet();
          }
        }, 10000);
  
    this.FoundProvider.getPosts().then((data) => {
      if (data) {
        loader.dismiss();
        this.internet=true
      }
      this.myData = data['data'];
      this.myComments = data['commnets'];
      console.log( this.myData);
    });
  }
  showComments(id){
this.showId=id;
//this.comments= !this.comments;
  }
  hideComments(){
this.showId=0;
  }
  noInternet() {
    
    const alert = this.alertCtrl.create({
      title: 'لا يوجد اتصال',
      subTitle: "تأكد من اتصالك بالانترنيت",
      buttons: ['حسناً']
    });
    alert.present();
  }
  addComment(id){
    this.storage.get('userId').then((value) => {
      this.commentData.user_id=value;
   });
   this.commentData.hide=0;
   this.commentData.found_id=id;
    this.FoundProvider.insertComment(this.commentData).then((result)=>{
      console.log(result)
      // this.navCtrl.pop()
      this.commentData.comment='';
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.found:- "+ JSON.stringify(this.commentData))
    })
    let newComment ={
      comment: this.commentData.comment, 
      found_id:id,
      hide: 0 ,
      user_id:  this.commentData.user_id
    }
    this.myComments.push(newComment);
    console.log('hi'+this.myComments)
   
  }
  
  
  checkAuthState(){
    this.storage.get('UserIsLogin').then((UserIsLogin) => {
        if (!UserIsLogin) { this.AuthState=false; } else { this.AuthState=true; }   
    });
  }
}
