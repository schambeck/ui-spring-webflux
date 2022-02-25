import {Component, OnInit} from '@angular/core';
import {Invoice} from "../../../shared/model/invoice";
import {ActivatedRoute} from "@angular/router";
import {InvoiceService} from "../../../shared/service/invoice.service";
import {finalize, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice?: Invoice;
  loading: boolean = false;
  saving: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: InvoiceService,
              private router: Router) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.findById(id).subscribe(invoice => {
      this.loading = false;
      this.invoice = invoice;
    });
  }

  navigateToList(): void {
    this.router.navigate(['/invoice-list']).then(() => console.log(`navigateToList`));
  }

  save(): void {
    this.saving = true;
    this.service.update(this.invoice).subscribe(invoice => {
      this.saving = false;
      this.invoice = invoice;
    });
  }

}
