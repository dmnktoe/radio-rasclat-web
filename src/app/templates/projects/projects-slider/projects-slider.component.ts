import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@app/core/models/Project';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.scss'],
})
export class ProjectsSliderComponent implements OnInit {
  @Input() projects: Project[];
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit(): void {}
}
