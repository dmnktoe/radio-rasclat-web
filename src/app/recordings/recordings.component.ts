import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.component.html',
  styleUrls: ['./recordings.component.scss'],
})
export class RecordingsComponent implements OnInit {
  recordings = '';
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getRecordings()
      .pipe(finalize(() => {}))
      .subscribe((recordings) => {
        this.recordings = recordings;
        this.isLoading = false;
      });
  }
}
