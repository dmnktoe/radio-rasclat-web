import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recordings-list',
  templateUrl: './recordings-list.component.html',
  styleUrls: ['./recordings-list.component.scss'],
})
export class RecordingsListComponent implements OnInit {
  @Input() recordings = '';
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit() {}
}
