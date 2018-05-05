import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../models/lista';
import { ListaProvider } from '../../providers/index.providers';
import { ListaDetallePage } from '../lista-detalle/lista-detalle';



@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {
  public listas: Lista;
  public listaDetallePage = ListaDetallePage;

  constructor(public navCtrl: NavController,  public _listaProvider : ListaProvider) {
  this._listaProvider.getListas().subscribe(result =>{
    this.listas =result.lists;

  });

  }

}
