import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxStripeComponent } from './ngx-stripe/ngx-stripe.component';
import { StripejsComponent } from './stripejs/stripejs.component';

const routes: Routes = [
  {path: 'ngx-stripe', component: NgxStripeComponent},
  {path: 'stripe', component: StripejsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
