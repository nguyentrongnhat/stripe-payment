import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStripeComponent } from './ngx-stripe.component';

describe('NgxStripeComponent', () => {
  let component: NgxStripeComponent;
  let fixture: ComponentFixture<NgxStripeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxStripeComponent]
    });
    fixture = TestBed.createComponent(NgxStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
