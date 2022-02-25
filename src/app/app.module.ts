import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {InvoiceScreenModule} from "./feature/invoice-screen/invoice-screen.module";
import {InvoiceDetailScreenModule} from "./feature/invoice-detail-screen/invoice-detail-screen.module";
import {WebSocketScreenModule} from "./feature/web-socket-screen/web-socket-screen.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    InvoiceScreenModule,
    InvoiceDetailScreenModule,
    WebSocketScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
