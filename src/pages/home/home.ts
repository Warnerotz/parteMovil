
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasPage } from '../listas/listas';
import { ListaProvider } from '../../providers/index.providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public _listaProvider: ListaProvider) {


  }

  viewLists(){
    this.navCtrl.push(ListasPage);


  }

}
