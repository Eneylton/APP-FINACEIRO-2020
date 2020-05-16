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

    this.navCtrl.push('FinanceiroPage');
  }

}
