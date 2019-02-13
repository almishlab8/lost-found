import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the DevelopersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-developers',
  templateUrl: 'developers.html',
})
export class DevelopersPage {

 
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevelopersPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
