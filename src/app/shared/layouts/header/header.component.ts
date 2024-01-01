import { Component, AfterViewInit, HostListener, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { SectionIdEnum as MainPageSectionIdEnum } from 'src/app/features/main/main.component.types';
import { NamesEnum as IconNamesEnum, ColorsEnum as IconColorsEnum } from 'src/app/shared/components/icon/icon.component.types';
import { Info } from './header.component.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @Input() fixed: boolean;
  @Input() fixedVisible: boolean;
  @Input() fixedTransition: boolean;
  @Input() activeNav: MainPageSectionIdEnum;
  @Output() navChange = new EventEmitter<MainPageSectionIdEnum>();
  @ViewChild('header') headerElementRef: ElementRef<HTMLHeadElement>;
  menuVisible: boolean = false;
  mainPageSectionIdEnum = MainPageSectionIdEnum;
  iconNamesEnum = IconNamesEnum;
  iconColorsEnum = IconColorsEnum;

  @HostListener('window:resize', ['$event'])
  onResize () {
    this.combineHeaderInfo();
    this.handleLargeScreenHideMenu();
  }

  constructor (
    private sharedService: SharedService
  ) { }

  ngAfterViewInit () {
    this.combineHeaderInfo();
  }

  combineHeaderInfo () {
    if (this.headerElementRef) {
      const info: Info = {
        height: this.headerElementRef.nativeElement.clientHeight
      };
      this.sharedService.setHeaderInfo(info);
    }
  }

  handleLargeScreenHideMenu () {
    if (window.innerWidth > 768 && this.menuVisible) this.handleToggleMenuVisible(false);
  }

  handleLockWindowScroll (lockup: boolean) {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      lockup
        ? bodyElement.classList.add('scroll-lockup')
        : bodyElement.classList.length > 1
          ? bodyElement.classList.remove('scroll-lockup')
          : bodyElement.removeAttribute('class');
    }
  }

  handleToggleMenuVisible (visible: boolean) {
    this.handleLockWindowScroll(visible);
    this.menuVisible = visible;
  }

  handleNav (event: Event) {
    const targetSectionId = (event.currentTarget as HTMLElement).getAttribute('data-target-section-id') as MainPageSectionIdEnum;
    if (this.menuVisible) this.handleToggleMenuVisible(false);
    if (targetSectionId) this.navChange.emit(targetSectionId);
  }
}
