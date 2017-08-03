/**
 * Created by fangjin on 2017/7/26.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker'
import  { FoundationService } from '../../providers/foundationservice'

import { ManageMoneyPage } from './managemoney';
import { PreviewPictureModule } from '../../modals/preview-picture/preview-picture.module'


@NgModule({
  declarations: [
    ManageMoneyPage
  ],
  imports: [
    IonicPageModule.forChild(ManageMoneyPage),PreviewPictureModule
  ],
  entryComponents: [
    ManageMoneyPage
  ],
  exports: [
    ManageMoneyPage
  ],
  providers:[FileTransfer,File,Camera,ImagePicker,FoundationService]
})
export class ManageMoneyModule {}
