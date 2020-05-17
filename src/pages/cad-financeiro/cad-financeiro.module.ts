import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadFinanceiroPage } from './cad-financeiro';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadFinanceiroPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadFinanceiroPage),
  ],
})
export class CadFinanceiroPageModule {}
