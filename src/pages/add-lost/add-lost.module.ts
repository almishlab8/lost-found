import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLostPage } from './add-lost';

@NgModule({
  declarations: [
    AddLostPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLostPage),
  ],
})
export class AddLostPageModule {}
