/**
 * Created by fangjin on 2017/7/11.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MineinfoPage } from './mineinfo/mineinfo'

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage implements OnInit{
  bankCardArr:any[]=[];
  passwardArr:any[]=[];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.bankCardArr=["我的信息","我的投资","我的银行卡","实名认证管理"];
    this.passwardArr=["我的密码","退出登录"]
  };

  pushAction(index){
   if (index==0){
     this.navCtrl.push(MineinfoPage);
   }
  }
}
