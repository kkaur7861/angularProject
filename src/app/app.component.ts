import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Sandhu Coffee House';
  images = ["/assets/images/image1.jpeg", "/assets/images/image2.jpeg"];
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | undefined;
  onSlide(slideEvent: NgbSlideEvent) {
  }
}
