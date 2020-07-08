import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CurrentTrackComponent } from './current-track/current-track.component';
import { ApiService } from '@app/core/api.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LimitPipe } from '@app/shared/pipes/LimitPipe';
import { SafeHtmlPipe } from '@app/shared/pipes/SafeHtmlPipe';
import { MomentPipe } from '@app/shared/pipes/MomentPipe';
import { IconsModule } from '@app/shared/icons/icons.module';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [CommonModule, NgbDropdownModule, IconsModule],
  declarations: [
    LoaderComponent,
    CurrentTrackComponent,
    SafeHtmlPipe,
    LimitPipe,
    MomentPipe,
  ],
  exports: [
    LoaderComponent,
    CurrentTrackComponent,
    SafeHtmlPipe,
    LimitPipe,
    MomentPipe,
    TimeagoModule,
  ],
  providers: [ApiService],
})
export class SharedModule {}
