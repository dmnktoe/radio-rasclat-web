import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ApiService } from '../core/api.service';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { RecordingsModule } from '@app/recordings/recordings.module';
import { ShowsModule } from '@app/shows/shows.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    SwiperModule,
    RecordingsModule,
    ShowsModule,
  ],
  declarations: [HomeComponent],
  providers: [ApiService, Title],
})
export class HomeModule {}
