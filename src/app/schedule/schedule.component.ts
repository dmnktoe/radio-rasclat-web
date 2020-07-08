import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedule: any;
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getSchedule()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((schedule) => {
        this.schedule = schedule;
      });
  }
}
