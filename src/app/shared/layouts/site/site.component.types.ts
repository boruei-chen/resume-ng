import { Info as HeaderInfo } from 'src/app/shared/layouts/header/header.component.types';
import { SectionInfo as MainPageSectionInfo, SectionIdEnum as MainPageSectionIdEnum } from 'src/app/features/main/main.component.types';

export interface HeaderState {
  info: HeaderInfo | null;
  fixed: boolean;
  fixedVisible: boolean;
  fixedTransition: boolean;
  activeNav: MainPageSectionIdEnum | null;
}

export interface MainPageState {
  sectionInfoList: MainPageSectionInfo[];
}
