import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detailtarget page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detailtarget',
  templateUrl: 'detailtarget.html',
})
export class DetailtargetPage {

  loan:{};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loan=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detailtarget');
  }

}
