import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickSlideComponent } from './slick-slide.component';

describe('SlickSlideComponent', () => {
  let component: SlickSlideComponent;
  let fixture: ComponentFixture<SlickSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlickSlideComponent]
    });
    fixture = TestBed.createComponent(SlickSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
