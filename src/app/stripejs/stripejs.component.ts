import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stripejs',
  templateUrl: './stripejs.component.html',
  styleUrls: ['./stripejs.component.scss']
})
export class StripejsComponent {
  constructor(private httpClient: HttpClient) {}
  public onCheckout(): void {
    console.log('clicked')
  }
}
