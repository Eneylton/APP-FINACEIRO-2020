import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = 'Menu';
  tab2Root:any = 'FinanceiroPage';
  tab3Root:any = 'ListDetalhesPage';
  tab4Root:any = 'CadFinanceiroPage';
  tab5Root:any = 'CadTransacoesPage';

  constructor() {


  }
  
}
