import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Welcome } from '../pages/welcome/welcome';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, public storage:Storage, splashScreen: SplashScreen,statusBar:StatusBar) {

    this.storage.get('firstIn').then((result) => {
        if(result){
          this.rootPage = TabsPage;
        }
        else{
          this.storage.set('firstIn', true);
          this.rootPage = Welcome;
        }

      });

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
