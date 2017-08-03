import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Mineinfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mineinfo',
  templateUrl: 'mineinfo.html',
})
export class MineinfoPage{
  itemsList:string[];
  searchQuery:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.initializeItems();
  }

  // initializeItems(){
  //   this.itemsList=[
  //     'ak','fff','gg','ed','jjd','hello'
  //   ];
  // }
  // getItems(event){
  //   this.initializeItems();
  //   let val=event.target.value;
  //   if(val && val.trim()!='') {
  //     this.itemsList=this.itemsList.filter((item)=>{
  //       return (item.toLowerCase().indexOf(val.toLowerCase())>-1);
  //     })
  //   }
  // }

  chooseHead(){

  }

}
