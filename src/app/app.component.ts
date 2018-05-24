import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/index.providers';
import { ListasPage } from '../pages/listas/listas';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public _usuarioProvider: UsuarioProvider) {
    platform.ready().then(() => {
      this._usuarioProvider.cargar_storage()
      .then( ()=>{
        if(this._usuarioProvider.data == null){
          this.rootPage = LoginPage;
        }else{
          this.rootPage = ListasPage;
        }
// Okay, so the platform is ready and our plugins are available.
// Here you can do any higher level native things you might need.
statusBar.styleDefault();
splashScreen.hide();
})
});
}
}
