import { Component, OnInit, AfterViewInit, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/bff/services/api/api.service';
import { MainPageDataResp } from 'src/app/bff/models/sources/main-page-data';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { NamesEnum as IconNamesEnum, ColorsEnum as IconColorsEnum } from 'src/app/shared/components/icon/icon.component.types';
import { SectionInfo, SectionIdEnum } from './main.component.types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChildren('section') sectionElementRefList: QueryList<ElementRef<HTMLElement>>;
  sectionIdEnum = SectionIdEnum;
  iconNamesEnum = IconNamesEnum;
  iconColorsEnum = IconColorsEnum;
  pageDataState: MainPageDataResp;

  @HostListener('window:resize', ['$event'])
  onResize () {
    this.combineSectionInfoList();
  }

  constructor (
    private apiService: ApiService,
    private sharedService: SharedService
  ) { }

  ngOnInit () {
    this.fetchPageData();
  }

  ngAfterViewInit () {
    this.asyncDoneCombineSectionInfoList();
  }

  fetchPageData () {
    this.apiService.fetchMainPageData().subscribe((response) => {
      if (response) this.pageDataState = response;
    });
  }

  combineSectionInfoList () {
    if (this.sectionElementRefList) {
      const sectionInfoList: SectionInfo[] = this.sectionElementRefList
        .toArray()
        .map((element) => ({
          id: element.nativeElement.getAttribute('data-section-id') as SectionIdEnum,
          offsetTop: element.nativeElement.offsetTop,
          height: element.nativeElement.clientHeight
        }));
      if (sectionInfoList.length > 0) {
        this.sharedService.setMainPageSectionInfoList(sectionInfoList);
      }
    }
  }

  asyncDoneCombineSectionInfoList () {
    this.sectionElementRefList.changes.subscribe(() => {
      this.combineSectionInfoList();
    });
  }
}
