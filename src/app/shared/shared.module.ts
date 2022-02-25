import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceService} from "./service/invoice.service";
import {WebSocketService} from "./service/web-socket.service";
import {NgxWebsocketModule} from "ngx-websocket";

@NgModule({
  imports: [
    CommonModule,
    NgxWebsocketModule,
  ],
  providers: [InvoiceService, WebSocketService]
})
export class SharedModule {
}
