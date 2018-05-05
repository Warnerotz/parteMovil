import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../config/global';
import { Lista } from '../../models/lista';
import 'rxjs/add/operator/map';


@Injectable()
export class ListaProvider {



  constructor(public http: HttpClient) {

  }

  getListas(){
    let url = `${URL}/lists`;
   return this.http.get<any>(url);

  }

}
