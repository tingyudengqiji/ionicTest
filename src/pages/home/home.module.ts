import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { DetailtargetPage} from './detailtarget/detailtarget';
import { TestService } from './testservice';

@NgModule({
  declarations: [
    HomePage,
    DetailtargetPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    DetailtargetPage
  ],
  exports: [
    HomePage
  ],
  providers:[TestService]
})
export class HomeModule {}
