import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReproduccionPage } from '../reproduccion/reproduccion';



@IonicPage()
@Component({
  selector: 'page-lista-detalle',
  templateUrl: 'lista-detalle.html',
})
export class ListaDetallePage {
  public list;
  public reproduccionPage: ReproduccionPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = this.navParams.get('list');
    console.log(this.list)
  }

goRep(media){

  this.navCtrl.push(ReproduccionPage, media);

}
}
