import { Component, AfterViewInit, HostListener, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterViewInit {
  @Input() src: string;
  @Input() name: string;
  @Input() width: number;
  @Input() height: number;
  @ViewChild('avatar') avatarElementRef: ElementRef<HTMLDivElement>;
  abbrFontSizeState: number;

  @HostListener('window:resize', ['$event'])
  onResize () {
    this.calcAbbrFontSize();
  }

  ngAfterViewInit () {
    this.calcAbbrFontSize();
  }

  calcAbbrFontSize () {
    if (!this.src && this.avatarElementRef) {
      this.abbrFontSizeState = this.avatarElementRef.nativeElement.clientWidth / 2;
    }
  }
}
