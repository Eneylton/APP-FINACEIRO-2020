import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage({})
@Component({
  selector: 'page-cad-financeiro',
  templateUrl: 'cad-financeiro.html',
})
export class CadFinanceiroPage {

  data_pagamento: number;
  pago: number;
  valor: any;
  categoria_id: number;
  deposito_id: number;
  status_id :number;
  transacoes_id :number;
  pagamento_id: number;
  pagamentos:any = [];
  categorias:any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public server: ServiceProvider,public alertCtrl: AlertController)  {
  }

  ionViewDidLoad() {
    this.listarPagamentos();
    this.listrCategorias();
  }

  listrCategorias() {
    let body = {

      crud:'listar_categorias'
    }

    this.server.postData(body,'Financeiro.php').subscribe(data=>{

      for(let item of data.result){
        this.categorias.push({
          id:item.id,
          descricao:item.descricao
        })
      }
    })

  }

  listarPagamentos() {
    let body = {

      crud:'listar_pagamentos'
    }

    this.server.postData(body,'Financeiro.php').subscribe(data=>{

      for(let item of data.result){
        this.pagamentos.push({
          id:item.id,
          descricao:item.descricao
        })
      }
    })

  }

  cadastrar(){

    let body = {
      data_pagamento:this.data_pagamento,
      pago:this.pago,
      valor:this.valor,
      categoria_id: this.categoria_id,
      deposito_id:this.deposito_id,
      status_id: this.status_id,
      transacoes_id: this.status_id,
      pagamento_id: this.pagamento_id,
      crud:'adicionar'

    }

    this.server.postData(body,'Financeiro.php').subscribe(data =>{

      this.showInsertOk();

    })
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Seu Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.navCtrl.setRoot('HomePage')
          }
        }
      ]
    });
    alert.present();
  }

}
