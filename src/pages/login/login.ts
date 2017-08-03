import { Component,Input,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Account } from '../../commons/user-info';
import { RegisterPage } from './register/register';
import { ForgetpasswordPage } from './forgetpassword/forgetpassword';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

  @Input() account: Account;
    // pushRegisterPage:any;
    // pushForgetPage:any;
    // forgetParams:Object;
   isRemmenberPwd:boolean=false;
    isShowPassword:boolean=false;
  // account:{
  //   userName:string;
  //   password:string;
  // };
  //
  // loginForm: FormGroup;
  // userName: any;
  // password: any;
  // constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams,public storage:Storage) {
  //   this.loginForm = formBuilder.group({
  //     username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
  //     password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  //   })
  //   this.userName = this.loginForm.controls['username'];
  //   this.password = this.loginForm.controls['password'];
  //
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.account={
      userName:'',
      password:''
    };
    // this.pushRegisterPage = RegisterPage;
    // this.pushForgetPage = ForgetpasswordPage;
    // this.forgetParams = {userPhone:this.account.userName}
  }

  getaccount(){
    this.storage.get('remmenberAccount').then((result) => {
      if(result == null){
        this.account={
          userName:'',
          password:''
        };
      }
      else{
        this.account = result;
        this.isRemmenberPwd = true;
      }
    });
  }
  ngOnInit(){
    this.getaccount();
  };

  forgetPassword(){
    this.navCtrl.push(ForgetpasswordPage,this.account);
  }

  /*登录 判断是否登录成功，成功后存储并返回，不成功提示错误*/
  loginAccount(){
    console.log(this.account)
    if (this.isRemmenberPwd == true){
      this.storage.set('remmenberAccount',this.account);
    }else {
      this.storage.set('remmenberAccount',null);
    }
    this.navCtrl.pop();

   // if (this.isRemmenberPwd == true){
   //    this.account.userName = this.userName.value;a
   //    this.account.password = this.password.value;
   //   // console.log(this.account)
   //   this.storage.set('remmenberAccount',this.account);
   // }
   // else {
   //   this.storage.set('remmenberAccount',null);
   // }

  }
  /*显示密码*/
  showPassword(){
    this.isShowPassword = !this.isShowPassword;
  }


  registerAccount(){
    this.navCtrl.push(RegisterPage);

  }
}
