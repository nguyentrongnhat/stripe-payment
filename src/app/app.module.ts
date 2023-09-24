import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxStripeComponent } from './ngx-stripe/ngx-stripe.component';

import { StripejsComponent } from './stripejs/stripejs.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxStripeComponent,
    StripejsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
