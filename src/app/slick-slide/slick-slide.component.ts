import { Component } from '@angular/core';

@Component({
  selector: 'app-slick-slide',
  templateUrl: './slick-slide.component.html',
  styleUrls: ['./slick-slide.component.scss']
})
export class SlickSlideComponent {
  slides = [
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"},
    {img: "../assets/demo.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "infinite": true
  };

  addSlide() {
    this.slides.push({img: "../assets/demo.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
