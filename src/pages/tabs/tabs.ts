import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {  NavController } from 'ionic-angular';


import { DiscoveryPage } from '../discivery/discovery';
import { ManageMoneyPage } from '../managemoney/managemoney';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { LoginPage } from '../login/login'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = ManageMoneyPage ;
  tab3Root = DiscoveryPage;
  tab4Root = MinePage;


  constructor(private alertCtrl:AlertController,public navCtrl: NavController) {

  }
  changeTabs(e){
    if (e.index==3){
      let alert = this.alertCtrl.create({
        title: '温馨提示',
        message: '您还没有登录，请先登录再访问',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '确定',
            handler: () => {
              this.navCtrl.push(LoginPage,{});
            }
          }
        ]
      });
      alert.present();
    }
  }
}
