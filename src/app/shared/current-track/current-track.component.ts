import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { ApiService } from '@app/core/api.service';
import { finalize } from 'rxjs/operators';
import moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.scss'],
})
export class CurrentTrackComponent implements OnInit {
  currentShowName: any;
  currentShowImg: any;
  currentShowStart: any;
  currentShowEnd: any;
  nextShowName: any;
  nextShowStart: any;
  nextShowEnd: any;
  isLoading = false;
  value: string;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private apiService: ApiService) {}

  onAudioPlay() {
    if (this.audioPlayerRef.nativeElement.paused) {
      this.audioPlayerRef.nativeElement.play();
      this.value = 'pause-circle';
    } else {
      this.audioPlayerRef.nativeElement.pause();
      this.value = 'play-circle';
    }
  }

  ngOnInit() {
    this.isLoading = true;
    this.value = 'play-circle';
    this.apiService
      .getCurrentShow()
      .pipe(finalize(() => {}))
      .subscribe((currentShow) => {
        if (currentShow !== null) {
          this.currentShowName = currentShow.name;
          this.currentShowImg = currentShow.image_path;
          this.currentShowStart = new Date(currentShow.starts);
          this.currentShowEnd = new Date(currentShow.ends);
          {
            $(document).ready(function () {
              const countDownDate = new Date(currentShow.ends).getTime();
              const startDate = new Date(currentShow.starts).getTime();
              function setBar() {
                const now = new Date().getTime();
                const distanceWhole = countDownDate - startDate;
                const distanceLeft = countDownDate - now;
                const minutesLeft = Math.floor(distanceLeft / (1000 * 60));
                const minutesTotal = Math.floor(distanceWhole / (1000 * 60));
                const progress = Math.floor(
                  ((minutesTotal - minutesLeft) / minutesTotal) * 100
                );
                $('#progressbar')
                  .attr('aria-valuenow', progress)
                  .css('width', progress + '%');
              }
              setBar();
              setInterval(setBar, 60000);
            });
          }
        }
        this.apiService
          .getNextShow()
          .pipe(finalize(() => {}))
          .subscribe((nextShow) => {
            if (nextShow.length > 0) {
              const startDate = moment(
                nextShow[0].starts,
                'YYYY-MM-DD HH:mm:ss'
              ).toDate();
              this.nextShowName = nextShow[0].name;
              this.nextShowStart = moment(startDate).fromNow();
            }
            this.isLoading = false;
          });
      });
  }
}
