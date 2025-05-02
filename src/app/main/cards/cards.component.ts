import { Component, input, model } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  host: {
    "(click)": "onClick()",
    "[class.selected]": "",
  }
})
export class CardsComponent {
  post         = input.required<Post>();
  selectedPost = model<Post>()

  onClick() {
    this.selectedPost.set(this.post())
  }
}
