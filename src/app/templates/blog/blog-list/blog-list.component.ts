import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '@app/core/models/Blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Input() blogPosts: Blog[];
  @Input() limit: number;
  @Input() isLoading = false;

  defaultImage = './../../../assets/svg/placeholder.svg';

  constructor() {}

  ngOnInit(): void {}
}
