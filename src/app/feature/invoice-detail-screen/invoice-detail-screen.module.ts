import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceDetailComponent} from './invoice-detail/invoice-detail.component';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { SkeletonModule } from 'primeng/skeleton';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    InvoiceDetailComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    SkeletonModule,
    BlockUIModule,
    PanelModule
  ],
  exports: [
    InvoiceDetailComponent
  ]
})
export class InvoiceDetailScreenModule {
}
