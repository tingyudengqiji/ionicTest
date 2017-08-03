import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PopoverController } from 'ionic-angular';
import { NewsPage } from '../news/news'

import { FoundationService } from '../../../providers/foundationservice'

/**
 * Generated class for the Helpcenter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-helpcenter',
  templateUrl: 'helpcenter.html',
})
export class HelpcenterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public foundationService:FoundationService,public popoverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Helpcenter');
  }

  showLoading(){
    this.foundationService.showLoading('正在加载');
  }

  presentPopocer(event){
    let popover = this.popoverCtrl.create(NewsPage);
    popover.present({
      ev:event
    })
  }

}
