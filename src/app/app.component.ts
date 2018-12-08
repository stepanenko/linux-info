import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: string;
  feedback: string;
  messageText: string;
  messages: Message[] = [];

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.onJoin()
      .subscribe(data => {
        this.messages = this.messages.concat(data);
      });

    this.chat.onLeave()
      .subscribe(data => {
        this.messages = this.messages.concat(data);
      });

    this.chat.onMessage()
      .subscribe(data => {
        this.feedback = '';
        this.messages = this.messages.concat(data);
      });

    this.chat.onTyping()
      .subscribe(data => {
        this.feedback = data.message;
      });
  }

  join() {
    this.chat.joinRoom({
      user: this.user
    });
  }

  leave() {
    this.chat.leaveRoom({
      user: this.user
    });
  }

  typing() {
    this.chat.typingMessage({
      user: this.user
    });
  }

  send() {
    if (!this.messageText) {
      return;
    }

    this.chat.sendMessage({
      user: this.user,
      message: this.messageText
    });

    this.messageText = null;
  }

}
