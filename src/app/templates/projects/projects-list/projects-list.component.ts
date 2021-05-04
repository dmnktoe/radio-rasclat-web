import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@app/core/models/Project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: Project[];
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit(): void {}
}
