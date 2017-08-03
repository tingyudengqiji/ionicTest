import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions,Response, RequestOptionsArgs,RequestMethod,URLSearchParams} from '@angular/http';
// import 'rxjs/add/operator/map';


import {AlertController} from "ionic-angular";
import {Observable} from "rxjs/Rx";
// import Response = ts.server.protocol.Response;

/*
  Generated class for the Httpservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpService {

  constructor(public http: Http,public alertCtrl: AlertController) {

  }

  public request(url: string, options: RequestOptionsArgs): Observable<Response> {
    url = HttpService.formatUrl(url);

    return Observable.create(observer => {
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(url, options).subscribe(res => {
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        observer.next(res);
      }, err => {
        this.requestFailed(url, options, err);//处理请求失败
        observer.error(err);
      });
    });
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpService.buildURLSearchParams(paramMap)
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

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err): void {
    // this.nativeService.hideLoading();
    console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
    let msg = '请求发生异常', status = err.status;
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
    // }
    console.log(url);
    this.alertCtrl.create({
      title: msg,
      subTitle: '状态码:' + status,
      buttons: [{text: '确定'}]
    }).present();
  }

  /**
   * url中如果有双斜杠替换为单斜杠
   * 如:http://88.128.18.144:8080//api//demo.替换后http://88.128.18.144:8080/api/demo
   * @param url
   * @returns {string}
   */
  private static formatUrl(url): string {
  // if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
  //     url = '192.168.1.126' + url;
  //   }
    let index = url.indexOf('//') + 2;
    return url.substring(0, index) + url.substring(index).replace(/\/\//g, '/');

}

  // private optionsAddToken(options: RequestOptionsArgs): void {
  //   let token = this.globalData.token;
  //   if (options.headers) {
  //     options.headers.append('token', token);
  //   } else {
  //     options.headers = new Headers({
  //       'token': token
  //     });
  //   }
  // }
}

