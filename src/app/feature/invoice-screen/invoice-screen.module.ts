import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceListComponent} from './invoice-list/invoice-list.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    InvoiceListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ProgressSpinnerModule,
    ToastModule,
    BrowserAnimationsModule,
    SkeletonModule
  ],
  exports: [
    InvoiceListComponent
  ]
})
export class InvoiceScreenModule {
}
