import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-recordings-single',
  templateUrl: './recordings-single.component.html',
  styleUrls: ['./recordings-single.component.scss'],
})
export class RecordingsSingleComponent implements OnInit {
  recording: any;
  title: any;
  hex: any;
  isLoading = false;
  getData: any;
  id: any;
  message: string;

  defaultImage = './../../../assets/svg/placeholder.svg';
  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle('Radio Rasclat • ' + title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.id = params.id;
      this.apiService
        .getRecording({ recordingId: this.id })
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((recording) => {
          this.recording = recording;
          this.setTitle({ title: this.recording.title });
          Vibrant.from(
            'https://cors-anywhere.herokuapp.com/' + this.recording.image
          )
            .getPalette()
            .then((palette) => {
              this.hex = palette.Vibrant.hex;
            });
        });
    });
  }
}
