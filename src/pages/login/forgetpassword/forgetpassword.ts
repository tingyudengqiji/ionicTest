import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Forgetpassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {

  account:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account =this.navParams.data;
  }

  getForIdentifyCode(){

  };

  resetPassword(){
    alert("点击了重置按钮")
  };

}
