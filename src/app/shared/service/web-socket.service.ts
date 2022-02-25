import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { environment } from "src/environments/environment";

declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  serverUrl = `${environment.urlBase}/socket`;

  constructor() {
  }

  public stompClient: any;
  public msg: string[] = [];

  stream(destination: string): Observable<string> {
    return new Observable((observer) => {
      const ws = new SockJS(this.serverUrl);
      this.stompClient = Stomp.over(ws);
      const that = this;
      this.stompClient.connect({}, function () {
        that.stompClient.subscribe(destination, (message: any) => {
          observer.next(message.body);
        });
      });

      return () => {
        console.log(`Closing connection to ${this.serverUrl}`);
        this.stompClient.disconnect();
      };
    });
  }

  sendMessage(message: string) {
    this.stompClient.send('/app/send/message', {}, message);
  }
}
