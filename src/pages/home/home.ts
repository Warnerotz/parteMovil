
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaProvider, UsuarioProvider } from '../../providers/index.providers';
import { LoginPage } from '../login/login';
import { GLOBAL } from '../../providers/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public identity;
  public url = GLOBAL.url

  constructor(public navCtrl: NavController, public _listaProvider: ListaProvider, _usuarioProvider: UsuarioProvider) {
    this.identity = _usuarioProvider.getIdentity();

  }

  logOut() {
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
    window.location.reload();
  }


}
