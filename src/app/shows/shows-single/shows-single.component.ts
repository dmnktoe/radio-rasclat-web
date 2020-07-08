import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-shows-single',
  templateUrl: './shows-single.component.html',
  styleUrls: ['./shows-single.component.scss'],
})
export class ShowsSingleComponent implements OnInit {
  show: any;
  recordings: any;
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
        .getShow({ showId: this.id })
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((show) => {
          this.show = show;
          if (typeof show.recordings[0]['title'] !== 'undefined') {
            this.recordings = show.recordings;
          } else {
            this.recordings = [];
          }
          this.setTitle({ title: this.show.title });
          Vibrant.from('https://cors-anywhere.herokuapp.com/' + this.show.image)
            .getPalette()
            .then((palette) => {
              this.hex = palette.Vibrant.hex;
            });
        });
    });
  }
}
