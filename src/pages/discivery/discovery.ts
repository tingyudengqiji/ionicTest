import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
// import { ActionSheet,ActionSheetOptions } from '@ionic-native/action-sheet'
// import { CallNumber } from '@ionic-native/call-number';

import { NoticePage } from './notice/notice';
import { NewsPage } from './news/news';
import { HelpcenterPage } from './helpcenter/helpcenter'


@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage implements OnInit{

  firstArr:any[]=[];
  secondArr:any[]=[];

  // let shareButtonLabels = ['微信好友','朋友圈','QQ','QQ空间','微博'];

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
  // ,private callNumber: CallNumber

  }

  chooseAction(e){
    if (e ==0){
      this.navCtrl.push(NoticePage,{});
    }
    else if (e==1){
      this.navCtrl.push(NewsPage,{});
    }
    else if (e==2){
      this.navCtrl.push(HelpcenterPage,{});
    }
    else if(e==3){
      this.showActionSheet();
    }
  };

  showActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title:'分享',
      buttons:[
        {
          text: 'QQ',
          role: '',
          icon:'',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'QQ空间',
          role: '',
          icon:'',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '朋友圈',
          role: '',
          icon:'',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '好友',
          role: '',
          icon:'',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '微博',
          role: '',
          icon:'',
          handler: () => {
            console.log('Destructive clicked');
          }
        }
      ]
    })
    actionSheet.present();
  }




  ngOnInit() {
    this.firstArr=["消息中心","新闻报道","帮助中心","分享"];
    this.secondArr=["最新消息公共","实时新闻报道","您关心的问题","分享得豪礼"]
  }

  /* 拨打电话*/
  callPhone(tel:string){
    console.log(tel);
    // this.callNumber.callNumber(tel, true)
    //   .then(() => console.log('Launched dialer!'))
    //   .catch(() => console.log('Error launching dialer'));
    window.open("tel:" + tel);
  }

}
