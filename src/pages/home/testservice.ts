/**
 * Created by fangjin on 2017/7/28.
 */
import { Injectable } from '@angular/core';
import {TestHttpService} from '../../providers/testhttpservice'
import {Http,Response} from '@angular/http';
import { FoundationService } from '../../providers/foundationservice'


@Injectable()
export class TestService extends TestHttpService{
  constructor(public http:Http,public foundationService:FoundationService){
    super(http,foundationService);
  }
  getInfo(){
    return super.get('/MJS/wloan/findLoanSign').map((res: Response) => res.json());
  };
}
