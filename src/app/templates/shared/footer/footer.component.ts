import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';
import { Blog } from '@app/core/models/Blog';
import * as typeformEmbed from '@typeform/embed';
import { ModalService } from '@app/core/services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  blogPosts: Blog[];
  year: number = new Date().getFullYear();
  isLoading: boolean;

  constructor(private apiService: ApiService, private modalService: ModalService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getBlogPosts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts;
      });
  }

  openParticipateDialog() {
    typeformEmbed.createSlider('zGcjEhGb').open();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
