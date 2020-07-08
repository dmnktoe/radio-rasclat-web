import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from '@app/shows/shows.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowsSingleComponent } from './shows-single/shows-single.component';
import { ApiService } from '../core/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RecordingsModule } from '@app/recordings/recordings.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ShowsRoutingModule,
    SwiperModule,
    RecordingsModule,
    LazyLoadImageModule,
  ],
  declarations: [ShowsComponent, ShowsListComponent, ShowsSingleComponent],
  exports: [ShowsListComponent],
  providers: [ApiService, Title],
})
export class ShowsModule {}
