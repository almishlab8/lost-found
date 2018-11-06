import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LostTypePage } from '../lost-type/lost-type';
import { AddLostPage } from '../add-lost/add-lost';
import { FoundTypePage } from '../found-type/found-type';
import { AddFoundPage } from '../add-found/add-found';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
lost(){this.navCtrl.push(LostTypePage)};
found(){this.navCtrl.push(FoundTypePage)};
add_lost(){this.navCtrl.push(AddLostPage)};
add_found(){this.navCtrl.push(AddFoundPage)};
}
