import { Injectable } from '@angular/core';
import { Response,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpService} from "../../providers/httpservice";
// import {Observable} from "rxjs/Rx";

/*
  Generated class for the Homeserve provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HomeService {

  constructor(public http: Http,public httpService:HttpService) {

  }

  getObj(){
    return this.httpService.get('/MJS/wloan/findLoanSign').map((res: Response) => res.json());
  }

}



