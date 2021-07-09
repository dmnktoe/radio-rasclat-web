import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgIconsModule } from '@ngneat/svg-icon';
import icons from '../../../assets/svg/svg-icons';
import { ModalModule } from '@app/templates/shared/modal';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    RouterModule,
    SharedModule,
    SvgIconsModule.forRoot({
      icons
    }),
    ModalModule,
    NgxTippyModule
  ],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
