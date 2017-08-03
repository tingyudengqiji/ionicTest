/**
 * Created by fangjin on 2017/7/26.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MinePage } from './mine';
import { MineinfoPage } from './mineinfo/mineinfo'

@NgModule({
  declarations: [
    MinePage,
    MineinfoPage
  ],
  imports: [
    IonicPageModule.forChild(MinePage),
  ],
  entryComponents: [
    MinePage,
    MineinfoPage
  ],
  exports: [
    MinePage,
    MineinfoPage
  ],
  providers:[]
})
export class MineModule {}
