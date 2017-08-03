import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker'
import { Observable } from "rxjs";
import { LoadingController ,Loading,ToastController} from 'ionic-angular'


/*
  Generated class for the Foundationsservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FoundationService {
  private loading:Loading;
  constructor(public http: Http,
              private camera:Camera,
              private imagePicker:ImagePicker,
              private loadingCtrl:LoadingController,
              private toastCtrl:ToastController) {

  }

  /*
  * 显示loading*/
  showLoading(content:string){
      this.loading=this.loadingCtrl.create({
        spinner:'bubbles',
        content:content
      })
    this.loading.present();
    // setTimeout(()=>{
    //   this.loading.dismiss();
    // },5000);
  }

  /*
  * 关闭loading*/
  hideLoading(){
      this.loading.dismiss();
  }

  /*
  * 显示提示内容*/
  showToast(msg:string=''){
    let toast=this.toastCtrl.create({
      message:msg,
      duration:2000,
      position:'middle',
      cssClass:`toast`

    })
    toast.present();
  }


  /**
   * 使用cordova-plugin-camera获取照片
   */
  getPicture(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
      destinationType: this.camera.DestinationType.DATA_URL,//默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
      quality: 90,//图像质量，范围为0 - 100
      allowEdit: true,//选择图片前是否允许编辑
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 1024,//缩放图像的宽度（像素）
      targetHeight: 1024,//缩放图像的高度（像素）
      saveToPhotoAlbum: false,//是否保存到相册
      correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
    }, options);
    return Observable.create(observer => {
      this.camera.getPicture(ops).then((imgData: string) => {
        if (ops.destinationType === this.camera.DestinationType.DATA_URL) {
          observer.next('data:image/jpg;base64,' + imgData);
        } else {
          observer.next(imgData);
        }
      }).catch(err => {
        if (err == 20) {
          // this.alert('没有权限,请在设置中开启权限');
          return;
        }
        if (String(err).indexOf('cancel') != -1) {
          return;
        }
        // this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
        // this.alert('获取照片失败');
      });
    });
  };


  /*
  *通过拍照获取照片
  */
  getPictureByCamera(options:CameraOptions={}):Observable<string>{
    let ops:CameraOptions=Object.assign({
      sourceType:this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    },options);
    return this.getPicture(ops);
  }

  /*
  *通过图库获取图片
  */
  getPictureByPhotoLibrary(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
    }, options);
    return this.getPicture(ops);
  };

  /**
   * 通过图库选择多图
   */
  getMultiplePicture(options = {}): Observable<any> {
    let ops=Object.assign({
      maximumImagesCount:9,
      width:1024,
      height:1024,
      quality:90,
    },options);
    return Observable.create(observer=>{
      this.imagePicker.getPictures(ops).then(files=>{
        let destinationType=options['destinationType']|| 0;//0:base64字符串,1:图片url
        if (destinationType==1){
          observer.next(files);
        }else {
          let imgBase64s=[];//base64字符串数组
          for(let fileUrl of files){
            // this.convertImgToBase64(fileUrl).subscribe(base64 => {
            //   imgBase64s.push(base64);
            //   if (imgBase64s.length === files.length) {
            //     observer.next(imgBase64s);
            //   }
            // })
          }
        }
      }).catch(err => {
          // this.logger.log(err, '通过图库选择多图失败');
          // this.alert('获取照片失败');
        });
    });
  };


}
