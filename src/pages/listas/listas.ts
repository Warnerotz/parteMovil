import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../models/lista';
import { ListaProvider, UsuarioProvider } from '../../providers/index.providers';
import { ListaDetallePage } from '../lista-detalle/lista-detalle';
import { GLOBAL } from '../../providers/global';



@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {
  public listas: Lista;
  public identity;
  public url = GLOBAL.url
  public listaDetallePage = ListaDetallePage;

  constructor(public navCtrl: NavController,  public _listaProvider : ListaProvider, public _usuarioProvider: UsuarioProvider) {
    this.identity = _usuarioProvider.getIdentity();
    this._listaProvider.getListas(this.identity._id).subscribe(result =>{
      this.listas =result.lists;
    });

  }

}
