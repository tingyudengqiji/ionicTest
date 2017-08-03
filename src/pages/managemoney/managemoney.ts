import { Component,Input } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker'
// import {Observable} from "rxjs";
import { FoundationService } from '../../providers/foundationservice';
import { PreviewPicturePage } from '../../modals/preview-picture/preview-picture'

import { AppConfig } from '../../app/app.config';
declare var Swiper;

@Component({
  selector: 'page-managemoney',
  templateUrl: 'managemoney.html'
})
export class ManageMoneyPage {
  segmentsArray = ['segmentOne','segmentTwo'];
  segmentModel: string = this.segmentsArray[0];
  avatarPath: string='assets/images/banner_bg.png';
  singlePicPath:string='assets/images/banner_bg.png';
  pictrueList:Array<any>=[];


  constructor(public navCtrl: NavController,
              public foundationService:FoundationService,
              private imagePicker: ImagePicker,
              private modalCtrl:ModalController) {

  }

    // fileTransfer: FileTransferObject = this.transfer.create();

  /*下拉刷新*/
  doRefresh(refresher) {
      setTimeout(()=>{
        refresher.complete();
      },2000);
  }

  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.segmentsArray.indexOf(this.segmentModel) ==0) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) + 1];
      }
    }
//向右滑
    if (event.direction == 4) {
      if (this.segmentsArray.indexOf(this.segmentModel) ==1) {
        this.segmentModel = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel) - 1];
      }
    }
  }
  /*立即抢购*/
  scareBuy(){
    alert(AppConfig.getWindowWidth())
  }

  loadFlie(){
    // let options:FileUploadOptions = {
    //   fileKey:'file',
    //   fileName:'',
    //   headers:{}
    // }
    // //第一个参数是文件的路径，第二个参数是服务器的url，第二个参数也可以是encodeURI(reqUri)
    // this.fileTransfer.upload(fileUrl,url,options).then((data)=>{
    //
    // },(err)=>{
    //
    // })


  }

  /*
  * 选择多张*/
  chooseMulPicture(){
    this.foundationService.getMultiplePicture({
      maximumImagesCount:9,
      destinationType:1,
    }).subscribe(imgs=>{
      for(let img of<string[]>imgs){
        this.getMulPictureSuccess(img);
      }
    })
  }

  /*
  * 选择一张图片*/
  chooseOnePicture(){
    let options ={
      targetWidth:256,
      targetHeight:256,
      quality:100,
      allowEdit:true
    }
    this.foundationService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
      this.getPictureSuccess(imageBase64);
    });
  }


  private getPictureSuccess(imageBase64) {
    this.singlePicPath = imageBase64;
  }
  private getMulPictureSuccess(img) {
    // this.isChange = true;
    this.pictrueList.push(img);
    // this.avatarPath = img;
  }

  deletePicture(i){

  }

  viewerPicture(index){
    // for (let fileObj of this.pictrueList) {
    //   picturePaths.push(fileObj.origPath);
    // }
    this.modalCtrl.create(PreviewPicturePage,{'pictureIndex':index,'list':this.pictrueList}).present();
  }

}


