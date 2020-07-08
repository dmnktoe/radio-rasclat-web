import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Title } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ScheduleRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [ScheduleComponent],
  providers: [Title],
})
export class ScheduleModule {}
