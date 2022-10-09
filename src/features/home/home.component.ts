import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ["/assets/images/image1.jpeg", "/assets/images/image2.jpeg"];//.map((n) => `https://picsum.photos/id/${n}/900/500`)
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | undefined;
  onSlide(slideEvent: NgbSlideEvent) {
    // if (this.unpauseOnArrow && slideEvent.paused &&
    //   (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
    //   this.togglePaused();
    // }
    // if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
    //   this.togglePaused();
    // }
  }
}
