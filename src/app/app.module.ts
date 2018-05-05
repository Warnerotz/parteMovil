import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
//pages
import { HomePage,ListaDetallePage,ListasPage,LoginPage } from '../pages/index.pages';

//providers
import { ListaProvider,UsuarioProvider,WebsocketProvider } from '../providers/index.providers';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaDetallePage,
    ListasPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaDetallePage,
    ListasPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaProvider,
    UsuarioProvider,
    WebsocketProvider
  ]
})
export class AppModule {}
