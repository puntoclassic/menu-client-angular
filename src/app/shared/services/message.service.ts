import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Message } from "src/types";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  messages = new Subject<Message>();

  pushMessage(msg: Message) {
    this.messages.next(msg);
  }
}
