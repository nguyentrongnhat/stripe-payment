import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripejsComponent } from './stripejs.component';

describe('StripejsComponent', () => {
  let component: StripejsComponent;
  let fixture: ComponentFixture<StripejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StripejsComponent]
    });
    fixture = TestBed.createComponent(StripejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
