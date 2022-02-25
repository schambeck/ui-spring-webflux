import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Invoice} from '../model/invoice';
import {environment} from '../../../environments/environment';
import {SseService} from "./sse.service";

const httpOptions = {
  headers: new HttpHeaders({'Accept': 'application/json'})
};

const httpOptionsSave = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url = `${environment.urlBase}/invoices`;

  constructor(private http: HttpClient,
              private sseService: SseService<Invoice>) {
  }

  // findAll(): Observable<string> {
  //   return this.sseClient.stream(this.url, {keepAlive: false, responseType: 'text'});
  // }

  findAll(): Observable<Invoice> {
    return this.sseService.stream(`${environment.urlBase}/invoices`);
  }

  stream(): Observable<Invoice> {
    return this.sseService.stream(`${environment.urlBase}/stream/invoices`);
  }

  // findAll(): Observable<Invoice[]> {
  //   const url = `${this.url}`;
  //   return this.http.get<Invoice[]>(url, httpOptions);
  // }

  findById(id: number): Observable<Invoice> {
    const url = `${this.url}/${id}`;
    return this.http.get<Invoice>(url, httpOptions);
  }

  // create(invoice: Invoice): Observable<Invoice> {
  //   return this.http.post<Invoice>(this.url, invoice, httpOptions);
  // }
  //
  // remove(invoice: Invoice | number): Observable<Invoice> {
  //   const id = typeof invoice === 'number' ? invoice : invoice.id;
  //   const url = `${this.url}/${id}`;
  //   return this.http.delete<Invoice>(url, httpOptions);
  // }

  update(invoice: Invoice | undefined): Observable<Invoice> {
    const url = `${this.url}/${invoice?.id}`;
    return this.http.put(url, invoice, httpOptionsSave);
  }

}
