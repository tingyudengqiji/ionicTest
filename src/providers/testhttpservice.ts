/**
 * Created by fangjin on 2017/7/28.
 */
import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions,Response, RequestOptionsArgs,RequestMethod,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

import { FoundationService } from './foundationservice'


// import {AlertController} from "ionic-angular";
import {Observable} from "rxjs/Rx";

@Injectable()

export class TestHttpService {

  constructor(public http:Http,
              public foundationService:FoundationService,) {

  }

  public request(url:string,options:RequestOptionsArgs):Observable<Response>{
    url = TestHttpService.formatUrl(url);
    // this.optionsAddToken(options);
    return Observable.create(observer =>{
      this.foundationService.showLoading("正在加载");
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(url, options).subscribe(res => {
        this.foundationService.hideLoading();
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        observer.next(res);
      }, err => {
        this.foundationService.hideLoading();
        this.requestFailed(url, options, err);//处理请求失败
        observer.error(err);
      });
    });
  }


  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: TestHttpService.buildURLSearchParams(paramMap)
    }));
  }

  public post(url: string, body: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }));
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        // val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  private static formatUrl(url): string {
    if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
      url = '192.168.1.127' + url;
    }
    let index = url.indexOf('//') + 2;
    return url.substring(0, index) + url.substring(index).replace(/\/\//g, '/');
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err): void {
    let msg = '请求发生异常', status = err.status;
    this.foundationService.showToast(url);
    // if (!this.nativeService.isConnecting()) {
    //   msg = '请求失败，请连接网络';
    // } else {
    //   if (status === 0) {
    //     msg = '请求失败，请求响应出错';
    //   } else if (status === 404) {
    //     msg = '请求失败，未找到请求地址';
    //   } else if (status === 500) {
    //     msg = '请求失败，服务器出错，请稍后再试';
    //   }
    // // }
    // console.log(url);
    // this.alertCtrl.create({
    //   title: msg,
    //   subTitle: '状态码:' + status,
    //   buttons: [{text: '确定'}]
    // }).present();
  }
}

