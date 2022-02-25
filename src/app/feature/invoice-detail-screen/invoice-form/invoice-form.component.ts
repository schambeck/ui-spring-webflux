import { Component, OnInit, Input } from '@angular/core';
import {Invoice} from "../../../shared/model/invoice";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  @Input()
  invoice?: Invoice | null;

  constructor() { }

  ngOnInit(): void {
  }

}
