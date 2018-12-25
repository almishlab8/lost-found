import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowFoundPage } from '../show-found/show-found';

/**
 * Generated class for the FoundTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-found-type',
  templateUrl: 'found-type.html',
})
export class FoundTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoundTypePage');
  }
  showPage(type){
    this.navCtrl.push(ShowFoundPage,{
      type:type
    });
  }

}
