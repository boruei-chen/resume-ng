import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Info as HeaderInfo } from 'src/app/shared/layouts/header/header.component.types';
import { SectionInfo as MainPageSectionInfo } from 'src/app/features/main/main.component.types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  headerInfo = new Subject<HeaderInfo>();
  mainPageSectionInfoList = new BehaviorSubject<MainPageSectionInfo[]>([]);

  setHeaderInfo (info: HeaderInfo) {
    this.headerInfo.next(info);
  }

  setMainPageSectionInfoList (sectionInfoList: MainPageSectionInfo[]) {
    this.mainPageSectionInfoList.next(sectionInfoList);
  }
}
