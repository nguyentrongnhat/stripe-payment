import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(public httpClient: HttpClient) { }

  makePayment(stripeToken: any): Observable<any> {
    return this.httpClient.post('', {})
  }

}
