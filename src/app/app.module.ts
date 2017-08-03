import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';


import { MyApp } from './app.component';
import { Welcome } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

/*module*/
import { HomeModule } from '../pages/home/home.module';
import { DiscoveryModule } from '../pages/discivery/discovery.module';
import { LoginModule } from '../pages/login/login.module';
import { ManageMoneyModule } from '../pages/managemoney/managemoney.module';
import { MineModule } from '../pages/mine/mine.module';

/*service*/
import { HttpService } from '../providers/httpservice';
import { HomeService } from '../pages/home/homeservice';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    DiscoveryModule,
    LoginModule,
    ManageMoneyModule,
    MineModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    HomeService,
    HTTP

  ]
})
export class AppModule {}
