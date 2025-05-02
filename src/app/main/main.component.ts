import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';
import { Post } from '../models/post';
import { CardService } from '../services/card.service';
import { CardsComponent } from "./cards/cards.component";
import { MainCardComponent } from "./main-card/main-card.component";

@Component({
  selector: 'app-main',
  imports: [CardsComponent, DatePipe, MainCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [
    CardService
  ]
})
export class MainComponent {
  private _cardService = inject(CardService);

  selectedPost = signal<Post | undefined>(undefined)

  postsResource = rxResource({
    loader: () =>
      this._cardService.getPosts()
  })

  dateTime = toSignal(
    interval(1000)
    .pipe(
      map(() => Date.now())
    ),
    { initialValue: Date.now() }
  )
}
