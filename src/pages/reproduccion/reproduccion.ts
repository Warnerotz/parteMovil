import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';



@IonicPage()
@Component({
  selector: 'page-reproduccion',
  templateUrl: 'reproduccion.html',
})
export class ReproduccionPage {

  public media;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _websocket: WebsocketProvider) {
    this.media = this.navParams.data;
    console.log(this.media);
  }

  sendMedia(media) {
    this._websocket.sendVideo({src: media, play:true});

  }

  pauseVideo(){
    this._websocket.pauseVideo();

  }


}
