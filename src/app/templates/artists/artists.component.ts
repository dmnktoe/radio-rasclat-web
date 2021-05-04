import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Artist } from '@app/core/models/Artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  isLoading = false;
  backgroundImg = false;
  backgroundImgPath: any;
  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor(private apiService: ApiService) {}

  changeBackground({ currentArtist }: { currentArtist: any }) {
    this.backgroundImg = true;
    this.backgroundImgPath = currentArtist.image;
  }

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
