import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxStripeComponent } from './ngx-stripe/ngx-stripe.component';
import { StripejsComponent } from './stripejs/stripejs.component';
import { SlickSlideComponent } from './slick-slide/slick-slide.component';

const routes: Routes = [
  {path: 'ngx-stripe', component: NgxStripeComponent},
  {path: 'stripe', component: StripejsComponent},
  {path: 'slide', component: SlickSlideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
