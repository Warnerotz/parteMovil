
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/users';
import { UsuarioProvider } from '../../providers/index.providers';
import { TabsPage } from '../tabs/tabs';

UsuarioProvider
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user: User;
  public identity;
  public token;
  public body;
  public status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _usuarioProvider: UsuarioProvider, public toastCtrl: ToastController) {
    this.user = new User ();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario o password incorrecto',
      duration: 3000
    });
    toast.present();
  }

  onSubmit() {
    // loguear al user y conseguir el objeto usuario
    this._usuarioProvider.login(this.user).subscribe(
      response => {
        console.log(response);

        delete response['user'].password;
        this.identity = response['user'];

        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se ha logueado correctamente');

        } else {
          localStorage.setItem('identity', JSON.stringify(this.identity));
          // conseguir el token
          this._usuarioProvider.login(this.user, true).subscribe(
            resp => {
              this.token = resp['token'];
              if (this.token.length <= 0) {
                console.log('El token no se ha generado');
              } else {
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this.navCtrl.push(TabsPage);
              }
            },
            error => {
            }
          );
        }
      },
      error => {
        const errorMessage = <any> error;
              if (errorMessage != null) {
                this.presentToast();
              }

      }
    );

  }


}
