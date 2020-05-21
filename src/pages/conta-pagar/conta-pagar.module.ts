import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContaPagarPage } from './conta-pagar';

@NgModule({
  declarations: [
    ContaPagarPage,
  ],
  imports: [
    IonicPageModule.forChild(ContaPagarPage),
  ],
})
export class ContaPagarPageModule {}
