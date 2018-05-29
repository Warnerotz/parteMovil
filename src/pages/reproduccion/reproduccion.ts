import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebsocketProvider } from '../../providers/websocket/websocket';
import { GLOBAL } from '../../providers/global';



@IonicPage()
@Component({
  selector: 'page-reproduccion',
  templateUrl: 'reproduccion.html',
})
export class ReproduccionPage {
  public url = GLOBAL.url
  public media;
  public list;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _websocket: WebsocketProvider) {
    this.media = this.navParams.data.media;
    this.list = this.navParams.data.list;

  }

  sendMedia(media) {
    this._websocket.sendVideo({src: media, play:true});

  }

  pauseVideo(){
    this._websocket.pauseVideo();

  }
  restartVideo(){
    this._websocket.restartVideo();

  }


}
