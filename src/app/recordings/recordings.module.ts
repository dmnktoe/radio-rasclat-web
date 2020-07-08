import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { RecordingsRoutingModule } from './recordings-routing.module';
import { RecordingsComponent } from '@app/recordings/recordings.component';
import { RecordingsListComponent } from './recordings-list/recordings-list.component';
import { RecordingsSingleComponent } from './recordings-single/recordings-single.component';
import { ApiService } from '../core/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxAnalyticsModule } from 'ngx-analytics';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    RecordingsRoutingModule,
    SwiperModule,
    LazyLoadImageModule,
    NgxAnalyticsModule,
    TooltipModule,
  ],
  declarations: [
    RecordingsComponent,
    RecordingsListComponent,
    RecordingsSingleComponent,
  ],
  exports: [RecordingsListComponent],
  providers: [ApiService, Title],
})
export class RecordingsModule {}
