import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WebSocketService} from "../../../shared/service/web-socket.service";

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit, OnDestroy {

  subscription?: Subscription;
  messages: string[] = [];

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.subscription = this.webSocketService.stream('/message').subscribe(message => this.messages.push(message));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
