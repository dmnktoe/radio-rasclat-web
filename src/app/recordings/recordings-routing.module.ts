import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { RecordingsComponent } from '@app/recordings/recordings.component';
import { RecordingsSingleComponent } from '@app/recordings/recordings-single/recordings-single.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'broadcasts',
      component: RecordingsComponent,
      data: { title: 'Radio Rasclat • Broadcasts' },
    },
    {
      path: 'broadcasts/:id',
      component: RecordingsSingleComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RecordingsRoutingModule {}
