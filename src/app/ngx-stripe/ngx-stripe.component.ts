import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { loadStripe, Stripe, StripeElementsOptionsClientSecret } from '@stripe/stripe-js';
import { environment } from 'src/evironments/evironment.dev';

@Component({
  selector: 'app-ngx-stripe',
  templateUrl: './ngx-stripe.component.html',
  styleUrls: ['./ngx-stripe.component.scss']
})
export class NgxStripeComponent implements OnInit {
  public stripe: Stripe;

  public card: any;

  public elements: any;

  public isLoadCardComplete: boolean = false;

  public paymentForm = new FormGroup({

  })

  async ngOnInit() {
    //this.invokeStripe();
    this.stripe = await loadStripe(environment.stripe_pk);
    this.createPaymentForm();
  }

  // public invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://js.stripe.com/v3/';
  //     script.onload = () => {
  //       this.stripe = (<any>window).Stripe(environment.stripe_pk);
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }

  public createPaymentForm(): void {
    const elements = this.stripe.elements();

    this.card = elements.create('card');
    this.card.mount("#card-element");

    this.isLoadCardComplete = true;

    this.card.on('change', event => {
      const displayError = document.getElementById('card-errors');
      event.error ? displayError.textContent = event.error.message: displayError.textContent = '';
    });

    const button = document.getElementById('submit');
    button.addEventListener('click', event => {
      event.preventDefault();
      console.log('card: ', this.card)
      this.makePayment();
    })
  }

  public makePayment() {
    this.stripe.confirmCardPayment('clientSecret', {
      payment_method: {
        card: this.card,
        billing_details: {
          email: 'Nhat@test.com'
        }
      }
    })
    .then(function(result) {
      if (result.error) {
        // Show error to your customer (for example, insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
        }
      }
    });
  }

}
