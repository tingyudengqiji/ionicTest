import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MineinfoPage } from './mineinfo';

@NgModule({
  declarations: [
    MineinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MineinfoPage),
  ],
  exports: [
    MineinfoPage
  ]
})
export class MineinfoModule {}
