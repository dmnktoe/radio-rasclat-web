import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ApiService } from '@app/core/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recordings = '';
  showsRecentlyUpdated = '';
  hotRecordings: any = [];
  hotRecording: any = [];
  schedule: any;
  isLoading = false;
  today: any;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
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
      .getRecordings()
      .pipe(finalize(() => {}))
      .subscribe((recordings) => {
        recordings.timeStart = new Date(
          recordings.timeStart
        ).toLocaleDateString();
        this.recordings = recordings;
        this.apiService
          .getHotRecording()
          .pipe(finalize(() => {}))
          .subscribe((hotRecording) => {
            this.hotRecording = hotRecording[0];
            this.apiService
              .getShowsRecentlyUpdated()
              .pipe(finalize(() => {}))
              .subscribe((showsRecentlyUpdated) => {
                this.showsRecentlyUpdated = showsRecentlyUpdated;
                this.apiService
                  .getSchedule()
                  .pipe(finalize(() => {}))
                  .subscribe((schedule) => {
                    this.today = moment().format('dddd');
                    this.schedule =
                      schedule[moment().format('dddd').toLowerCase()];
                    this.apiService
                      .getHotRecordings()
                      .pipe(
                        finalize(() => {
                          this.isLoading = false;
                        })
                      )
                      .subscribe((hotRecordings) => {
                        this.hotRecordings = hotRecordings;
                      });
                  });
              });
          });
      });
  }
}
