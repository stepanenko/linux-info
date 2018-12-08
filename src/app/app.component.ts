import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: string;
  room: string;
  messageText: string;
  messageArray: Message[] = [];

  constructor(private chat: ChatService) {
    this.chat.newUserJoined()
      .subscribe(data => {
        this.messageArray = this.messageArray.concat(data);
      });

    this.chat.userLeftRoom()
      .subscribe(data => {
        this.messageArray = this.messageArray.concat(data);
      });

    this.chat.newMessageReceived()
      .subscribe(data => {
        this.messageArray = this.messageArray.concat(data);
      });
  }

  join() {
    this.chat.joinRoom({
      user: this.user,
      room: this.room
    });
  }

  leave(data) {
    this.chat.leaveRoom({
      user: this.user,
      room: this.room
    });
  }

  sendMessage(data) {
    this.chat.sendMsg({
      user: this.user,
      room: this.room,
      message: this.messageText
    });
  }

}
