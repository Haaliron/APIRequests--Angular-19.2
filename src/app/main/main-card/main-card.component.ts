import { Component, inject, model } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Post } from '../../models/post';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
  private _cardsService = inject(CardService)

  selectedPost = model<Post>()

  commentsResource = rxResource({
    request: this.selectedPost,
    loader: ({ request }) =>
      request
        ? this._cardsService.getComments(request.id)
        : of(undefined)
  })
}
