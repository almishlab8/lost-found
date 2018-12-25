import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowLostPage } from '../show-lost/show-lost';

/**
 * Generated class for the LostTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lost-type',
  templateUrl: 'lost-type.html',
})
export class LostTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostTypePage');
  }
  showPage(type){
    this.navCtrl.push(ShowLostPage,{
      type:type
    });
  }
}
