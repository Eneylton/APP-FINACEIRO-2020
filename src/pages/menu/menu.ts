import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  @ViewChild('content') childNavCtrl: NavController;
  homePage: any = 'HomePage';
  menuPage: any = 'Menu';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.homePage = 'HomePage';
    this.menuPage = 'Menu';

  }

  openFinanceiro(){

    this.navCtrl.setRoot('FinanceiroPage');
  }
  
  openCadFinanceiro(){

    this.navCtrl.setRoot('CadFinanceiroPage');
  }
  
  openCategoria(){

    this.navCtrl.setRoot('ListCategoriaPage');
  }
  
  openDetalhe(){

    this.navCtrl.setRoot('ListDetalhesPage');
  }

  openTransacoes(){

    this.navCtrl.setRoot('CadTransacoesPage');
  }

  openEstCategoria(){

    this.navCtrl.push('EstCategoriaPage');
  }

  openContaRececeber(){

    this.navCtrl.push('ContaRecebePage');
  }

  openContaPagar(){

    this.navCtrl.push('ContaPagarPage');
  }


  openContaPagarCaixa(){

    this.navCtrl.push('CaixaPagarPage');
  }

  openContaPagarReceber(){

    this.navCtrl.push('CaixaReceberPage');
  }

}
