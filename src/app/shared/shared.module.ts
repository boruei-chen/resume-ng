import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SiteComponent } from './layouts/site/site.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { IconComponent } from './components/icon/icon.component';
import { HistoryGalleryComponent } from './components/history-gallery/history-gallery.component';

@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CopyrightComponent,
    IconComponent,
    HistoryGalleryComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    SiteComponent,
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CopyrightComponent,
    IconComponent,
    HistoryGalleryComponent
  ]
})
export class SharedModule { }
