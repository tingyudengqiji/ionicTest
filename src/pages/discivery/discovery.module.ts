/**
 * Created by fangjin on 2017/7/26.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DiscoveryPage } from './discovery';
import { NewsPage } from './news/news';
import { NoticePage } from './notice/notice';
import { HelpcenterPage } from './helpcenter/helpcenter'


@NgModule({
  declarations: [
    DiscoveryPage,
    NewsPage,
    NoticePage,
    HelpcenterPage
  ],
  imports: [
    IonicPageModule.forChild(DiscoveryPage),
  ],
  entryComponents: [
    DiscoveryPage,
    NewsPage,
    NoticePage,
    HelpcenterPage
  ],
  exports: [
    DiscoveryPage
  ]
})
export class DiscoveryModule {}
