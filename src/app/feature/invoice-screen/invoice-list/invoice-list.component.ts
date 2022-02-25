import {Component, OnDestroy, OnInit} from '@angular/core';
import {Invoice} from "../../../shared/model/invoice";
import {InvoiceService} from "../../../shared/service/invoice.service";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  providers: [MessageService]
})
export class InvoiceListComponent implements OnInit, OnDestroy {
  invoices: Invoice[] = [];
  fake: Invoice[] = [{}, {}, {}, {}];
  selectedInvoice?: Invoice;
  // invoices$?: Observable<Invoice>;
  sseStream?: Subscription;
  sseStreamUpdated?: Subscription;
  loading: boolean = false;
  loadedFirst: boolean = false;
  changeColor= [false, false, false];

  constructor(private service: InvoiceService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadedFirst = false;
    this.sseStream = this.service.findAll()
      .pipe(finalize(() => this.loading = false))
      .subscribe({next: invoice => {
        this.loadedFirst = true;
        this.invoices.push(invoice);
      }});
    this.sseStreamUpdated = this.service.stream().subscribe({next: invoice => {
      var updated = this.invoices.filter(value => value.id === invoice.id);
      updated[0].issued = invoice.issued;
      updated[0].total = invoice.total;
      this.selectedInvoice = updated[0];
      this.messageService.add({severity:'success', summary:'Updated', detail:`Id: ${this.selectedInvoice.id} Issued: ${this.selectedInvoice.issued} Total: ${this.selectedInvoice.total}`});
      setTimeout(()=> {
        this.selectedInvoice = undefined;
      }, 2000);
    }});

    // this.sseStream = this.service.findAll().subscribe((invoice) => this.invoices.push(JSON.parse(invoice)));
    // this.invoices$ = this.service.findAll();
  }

  ngOnDestroy(): void {
    if (this.sseStream) {
      this.sseStream.unsubscribe();
    }
    if (this.sseStreamUpdated) {
      this.sseStreamUpdated.unsubscribe();
    }
  }

  navigateToDetail(invoice: Invoice): void {
    this.router.navigate(['/invoice-detail', {id: invoice.id}]).then(() => console.log(`navigateToDetail ${JSON.stringify(invoice)}`));
  }

}
