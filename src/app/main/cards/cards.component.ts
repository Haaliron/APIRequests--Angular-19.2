import { Component, computed, input, model } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  host: {
    '(click)': 'onClick()',
    '[class.selected]': 'isSelected()',
  },
})
export class CardsComponent {
  post = input.required<Post>();

  selectedPost = model<Post>();

  isSelected = computed(() => Object.is(this.post(), this.selectedPost()));

  onClick() {
    if (this.isSelected()) {
      this.selectedPost.set(undefined)
    }
    else {
      this.selectedPost.set(this.post());

    }
  }
}
