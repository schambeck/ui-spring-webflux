import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceListComponent} from "./feature/invoice-screen/invoice-list/invoice-list.component";
import {InvoiceDetailComponent} from "./feature/invoice-detail-screen/invoice-detail/invoice-detail.component";
import {PageNotFoundComponent} from "./feature/page-not-found-screen/page-not-found/page-not-found.component";
import {WebSocketComponent} from "./feature/web-socket-screen/web-socket/web-socket.component";

const routes: Routes = [
  {path: 'invoice-list', component: InvoiceListComponent},
  {path: 'invoice-detail', component: InvoiceDetailComponent},
  {path: 'websocket', component: WebSocketComponent},
  {path: '', redirectTo: '/invoice-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
