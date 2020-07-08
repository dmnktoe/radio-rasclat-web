import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
  shows = '';
  isLoading = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    pagination: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      // when window width is <= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getShows()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((shows) => {
        this.shows = shows;
      });
  }
}
