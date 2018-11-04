import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowLostPage } from './show-lost';

@NgModule({
  declarations: [
    ShowLostPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowLostPage),
  ],
})
export class ShowLostPageModule {}
