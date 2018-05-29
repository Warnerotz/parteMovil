import { GLOBAL } from '../global';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../config/global';
import { Lista } from '../../models/lista';
import 'rxjs/add/operator/map';
import { UsuarioProvider } from '../usuario/usuario';


@Injectable()
export class ListaProvider {
  public url = GLOBAL.url;


  constructor(public http: HttpClient, public _usuarioProvider : UsuarioProvider) {

  }

  getListas(userId){
    const headers = new HttpHeaders({'Content-Type': 'application/json','authorization':this._usuarioProvider.getToken()});
     return this.http.get<any>(this.url+'/lists/' + userId,{headers:headers});

  }

}
