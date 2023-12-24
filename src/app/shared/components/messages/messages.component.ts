import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { MessageService } from 'src/app/shared/services/message.service';
import { Message, MessageType } from 'src/types';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  classes: string = '';
  message?: Message;
  messageStream = new Subscription();
  MessageType: typeof MessageType = MessageType;

  constructor(private appService: MessageService) {
    this.messageStream = this.appService.messages.subscribe((msg) => {
      this.message = msg;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.messageStream.unsubscribe();
  }
}
