
import { Injectable } from '@angular/core';


import { Socket } from 'ng-socket-io';
@Injectable()
export class WebsocketProvider {

  constructor(private socket: Socket) {
    console.log('Hello WebsocketProvider Provider');
  }

  sendVideo(data) {
    this.socket.emit('changeVideo', data);
  }

  pauseVideo(data){
    this.socket.emit('pause', data);

  }

}
