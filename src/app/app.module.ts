import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { MyApp } from './app.component';
//pages
import { HomePage,ListaDetallePage,ListasPage,LoginPage, ReproduccionPage, TabsPage } from '../pages/index.pages';

//providers
import { ListaProvider,UsuarioProvider,WebsocketProvider } from '../providers/index.providers';


const config: SocketIoConfig = { url: 'http://localhost:4512', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaDetallePage,
    ListasPage,
    LoginPage,
    ReproduccionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaDetallePage,
    ListasPage,
    LoginPage,
    ReproduccionPage,
    TabsPage
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
