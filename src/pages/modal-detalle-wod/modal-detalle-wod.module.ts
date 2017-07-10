import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDetalleWodPage } from './modal-detalle-wod';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ModalDetalleWodPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDetalleWodPage),
    TranslateModule.forChild()
  ],
  exports: [
    ModalDetalleWodPage,
    TranslateModule
  ]
})
export class ModalDetalleWodPageModule {}
