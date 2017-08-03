/**
 * Created by fangjin on 2017/7/26.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { ForgetpasswordPage } from './forgetpassword/forgetpassword';
import { RegisterPage } from './register/register';
// import { HelpcenterPage } from '../discivery/helpcenter/helpcenter'


@NgModule({
  declarations: [
    LoginPage,
    ForgetpasswordPage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  entryComponents: [
    LoginPage,
    ForgetpasswordPage,
    RegisterPage
  ],
  exports: [
    LoginPage
  ]
})
export class LoginModule {}
