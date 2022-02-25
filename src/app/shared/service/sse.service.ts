import {Injectable, NgZone} from '@angular/core';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService<T> {

  constructor(private zone: NgZone) {
  }

  stream(url: string): Observable<T> {
    return new Observable<T>((observer) => {
      const eventSource = new EventSource(url);

      eventSource.onopen = () => this.zone.run(() => console.log(`Opened connection to ${eventSource.url}`));

      eventSource.onmessage = (event: any) => {
        this.zone.run(() => {
          console.log(`Received: ${event.data}`)
          observer.next(JSON.parse(event.data));
        });
      };

      eventSource.onerror = (event: any) => {
        this.zone.run(() => {
          if (eventSource.readyState === EventSource.CONNECTING) {
            console.log(`The stream has been closed by the server, closing connection to ${eventSource.url}`);
            eventSource.close();
            observer.complete();
          } else {
            console.error(event)
            observer.error(event);
          }
        });
      };

      // return () => {
      //   console.log(`Closing connection to ${eventSource.url}`);
      //   eventSource.close();
      // };
    });
  }

}
