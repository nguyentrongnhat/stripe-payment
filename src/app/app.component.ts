import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'stripe';

  paymentHandler: any = null;

  ngOnInit(): void {
    this.invokeStripe();
  }

  public makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51My4HDI7PZGFqvvsPtLYLMW3vM5WMeWEyOMcQTrKVdEKVKXpfoQP0TX9NJlVkNdRkpGJ1Va1ducPUSGRCUBg9pMm00V3zaiVNj',
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken);

      },
    });

    paymentHandler.open({
      name: "Nguyen Trong Nhat",
      description: "Hello test",
      currency: "jpy",
      amount: amount*100
    })
  }

  public invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51My4HDI7PZGFqvvsPtLYLMW3vM5WMeWEyOMcQTrKVdEKVKXpfoQP0TX9NJlVkNdRkpGJ1Va1ducPUSGRCUBg9pMm00V3zaiVNj',
          locale: 'auto',
          token: function(stripeToken: any) {
            console.log(stripeToken);
          },
        });
      }

      window.document.body.appendChild(script);
    }
  }
}

