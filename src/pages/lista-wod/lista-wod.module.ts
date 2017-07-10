import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaWodPage } from './lista-wod';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListaWodPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaWodPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListaWodPage,
    TranslateModule
  ]
})
export class ListaWodPageModule {}
