import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GLOBAL } from '../global';

@Injectable()
export class UsuarioProvider {
  public url = GLOBAL.url
  public token: string;
  public data: any;
  constructor(public http: HttpClient, private platform: Platform, private storage: Storage) {
    console.log('Hello UsuarioProvider Provider');
  }

  login(user, gettoken= null) {
    if  (gettoken != null)  {
      user.gettoken = gettoken;
    }
    const params = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url + 'login', params, {headers});

  }

  cargar_storage() {

    let promesa = new Promise((resolve, reject) => {

      if (this.platform.is("cordova")) {
        // Dispositivo
        console.log("Inicializando storage");

        this.storage.ready()
          .then(() => {
            this.storage.get("identity")
              .then(data => {
                if (data) {
                  this.data = data;
                }
                resolve();
              });
          })
      } else {
        // Escritorio
        if (localStorage.getItem("identity")) {
          this.data = JSON.parse(localStorage.getItem("identity"));
        }
        resolve();
      }

    });
    return promesa;

  }

}
