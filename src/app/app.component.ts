import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/index.providers';
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
          this.rootPage = HomePage;
        }
// Okay, so the platform is ready and our plugins are available.
// Here you can do any higher level native things you might need.
statusBar.styleDefault();
splashScreen.hide();
})
});
}
}
