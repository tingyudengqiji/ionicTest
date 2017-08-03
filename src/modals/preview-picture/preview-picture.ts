import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
declare var Swiper;
/**
 * Generated class for the PreviewPicture page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-preview-picture',
  templateUrl: 'preview-picture.html',
})
export class PreviewPicturePage {

  chooseIndex:number=0;
  pictureLists:string[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.chooseIndex=this.navParams.get('pictureIndex');
    this.pictureLists=this.navParams.get('list');
  }

  ionViewDidLoad() {
    var swiper =new Swiper('.swiper-container',{
      initialSlide: this.chooseIndex,// 默认显示第几个
      zoom:true,//双击,手势缩放
      pagination : '.swiper-pagination',//分页器
      paginationType : 'fraction',//分页器类型
      prevButton:'.swiper-button-prev',//后退按钮的css选择器
      nextButton:'.swiper-button-next',//前进按钮的css选择器
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  dismissCtrl(){
    this.viewCtrl.dismiss();
  }

}
