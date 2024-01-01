import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { WindowScrollDirectionEnum } from 'src/app/core/enums/browser/window-scroll-direction.enum';
import { SectionIdEnum as MainPageSectionIdEnum } from 'src/app/features/main/main.component.types';
import { HeaderState, MainPageState } from './site.component.types';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  private lastWindowScrollTop: number = 0;
  headerState: HeaderState = {
    info: null,
    fixed: false,
    fixedVisible: false,
    fixedTransition: false,
    activeNav: null
  };
  mainPageState: MainPageState = {
    sectionInfoList: []
  };

  @HostListener('window:scroll', ['$event'])
  onScroll () {
    this.handleHeaderFixed();
  }

  @HostListener('window:wheel', ['$event'])
  onWheelScroll () {
    this.handleHeaderNavActive();
  }

  constructor (
    private sharedService: SharedService
  ) { }

  ngOnInit () {
    this.sharedService.headerInfo.subscribe((response) => { this.headerState.info = response; });
    this.sharedService.mainPageSectionInfoList.subscribe((response) => { this.mainPageState.sectionInfoList = response; });
  }

  getWindowScrollDirection () {
    const windowScrollTop = document.documentElement.scrollTop;
    const windowScrollDirection = windowScrollTop > this.lastWindowScrollTop ? WindowScrollDirectionEnum.Down : WindowScrollDirectionEnum.Up;
    this.lastWindowScrollTop = windowScrollTop;
    return windowScrollDirection;
  }

  handleHeaderFixed () {
    const headerHeight = this.headerState.info.height;
    const mainPage2ndSectionInfo = this.mainPageState.sectionInfoList[1];
    if (headerHeight && mainPage2ndSectionInfo) {
      const windowScrollDirection = this.getWindowScrollDirection();
      const mainPage2ndSectionOffsetTop = mainPage2ndSectionInfo.offsetTop - headerHeight;
      this.headerState.fixed = window.scrollY > headerHeight;
      this.headerState.fixedVisible = !(window.scrollY > headerHeight && window.scrollY < mainPage2ndSectionOffsetTop);
      this.headerState.fixedTransition = (windowScrollDirection === WindowScrollDirectionEnum.Down && window.scrollY >= mainPage2ndSectionOffsetTop) || (windowScrollDirection === WindowScrollDirectionEnum.Up && window.scrollY > headerHeight);
    }
  }

  handleHeaderNavActive () {
    const headerHeight = this.headerState.info.height;
    if (headerHeight) {
      const currentSectionInfo = this.mainPageState.sectionInfoList.find((sectionInfo) => window.scrollY >= (sectionInfo.offsetTop - headerHeight) && window.scrollY < ((sectionInfo.offsetTop - headerHeight) + sectionInfo.height));
      if (currentSectionInfo) {
        this.headerState.activeNav = currentSectionInfo.id;
      }
    }
  }

  handleMainPageScrollToTargetSection (targetSectionId: MainPageSectionIdEnum) {
    const headerHeight = this.headerState.info.height;
    const targetSectionInfo = this.mainPageState.sectionInfoList.find((sectionInfo) => sectionInfo.id === targetSectionId);
    if (headerHeight && targetSectionInfo) {
      const targetSectionOffsetTop = targetSectionInfo.offsetTop - headerHeight;
      this.headerState.activeNav = targetSectionId;
      window.scrollTo({ top: targetSectionOffsetTop, behavior: 'smooth' });
    }
  }
}
