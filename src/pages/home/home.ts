import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { HomeService } from './homeservice';
import { TestService } from './testservice';


import { DetailtargetPage } from './detailtarget/detailtarget';
// import { LoanInfo } from '../../commons/loans'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  // fileObjList: Object;
  @ViewChild('homeSlider') slider:Slides;
  index:number=0;
  loanArray:any=[];


  constructor(public navCtrl: NavController,public homeService:TestService) {

  }
  ngOnInit(){
    setInterval(()=>{
      if(this.index == 1){
        this.index=0;
      }
      else {
        this.index++;
      }
      this.slider.slideTo(this.index,300,true);
    },5000);

    this.homeService.getInfo().subscribe(res => {
      if(res!==null){
        this.loanArray = res.loan;
      }
      console.log(this.loanArray );
    });

    // this.httpse.getContacts();

  };


  ionViewWillEnter(){
    this.slider.startAutoplay();
  }

  pushNewUser(loanInfo){
   this.navCtrl.push(DetailtargetPage,loanInfo);
  }

 /*上拉加载*/
   doInfinite(infinite){
    setTimeout(()=>{
      console.log('Async operation has ended');
      infinite.complete();
    },2000);
  }
}
