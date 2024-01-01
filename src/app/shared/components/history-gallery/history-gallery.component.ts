import { Component, AfterViewInit, Input } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';
import { DataSource } from './history-gallery.component.types';

@Component({
  selector: 'app-history-gallery',
  templateUrl: './history-gallery.component.html',
  styleUrls: ['./history-gallery.component.scss']
})
export class HistoryGalleryComponent implements AfterViewInit {
  config: Swiper;
  @Input() dataSource: DataSource[];

  ngAfterViewInit () {
    this.initialSetup();
    this.executeDataSourceDoubled();
  }

  initialSetup () {
    this.config = new Swiper('.swiper', {
      modules: [Autoplay],
      direction: 'horizontal',
      slidesPerView: 'auto',
      allowTouchMove: false,
      loop: true,
      speed: 6000,
      autoplay: {
        delay: 1
      }
    });
  }

  executeDataSourceDoubled () {
    const slideElemList = document.querySelectorAll<HTMLDivElement>('.swiper-slide');
    const slideElemListTotalWidth = Array.from(slideElemList).reduce((acc, curr) => acc + curr.offsetWidth, 0);
    if (slideElemListTotalWidth > window.innerWidth) this.dataSource = this.dataSource.concat(this.dataSource);
  }
}
