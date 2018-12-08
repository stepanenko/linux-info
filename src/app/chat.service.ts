import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Message } from './models/message';

@Injectable()
export class ChatService {

  private socket = io('http://localhost:5000');

  joinRoom(data) {
    this.socket.emit('join', data);
  }

  onJoin() {
    const observable = new Observable<Message>(observer => {
      this.socket.on('new user joined', data => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });

    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  onLeave() {
    const observable = new Observable<Message>(observer => {
      this.socket.on('left chat', data => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });

    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  onMessage() {
    const observable = new Observable<Message>(observer => {
      this.socket.on('new message', data => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });

    return observable;
  }

  typingMessage(data) {
    this.socket.emit('typing', data);
  }

  onTyping() {
    const observable = new Observable<Message>(observer => {
      this.socket.on('typing', data => {
        observer.next(data);
      });
      return () => this.socket.disconnect();
    });

    return observable;
  }

}
