import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebSocketComponent} from './web-socket/web-socket.component';
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    WebSocketComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class WebSocketScreenModule {
}
