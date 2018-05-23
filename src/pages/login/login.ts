
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/users';
import { UsuarioProvider } from '../../providers/index.providers';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _usuarioProvider: UsuarioProvider) {
    this.user = new User ();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
                this.navCtrl.push(HomePage);
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
                this.body = JSON.parse(error._body);
                this.status = 'error';
              }

      }
    );

  }


}
