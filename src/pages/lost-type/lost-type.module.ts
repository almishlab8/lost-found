import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostTypePage } from './lost-type';

@NgModule({
  declarations: [
    LostTypePage,
  ],
  imports: [
    IonicPageModule.forChild(LostTypePage),
  ],
})
export class LostTypePageModule {}
