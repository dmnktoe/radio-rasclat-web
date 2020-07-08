import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string = environment.version;
  artists = '';
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getArtists()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((artists) => {
        this.artists = artists;
      });
  }
}
