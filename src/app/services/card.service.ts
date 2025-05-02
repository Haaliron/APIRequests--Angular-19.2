import { HttpClient, HttpContextToken } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Comments } from '../models/comment';
import { Posts } from '../models/post';

@Injectable()
export class CardService {
  private _httpClient = inject(HttpClient);

  getPosts(): Observable<Posts> {
    return this._httpClient.get<Posts>("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        delay(1000)
      )
  }

  getComments(postId: number): Observable<Comments> {
    return this._httpClient.get<Comments>("https://jsonplaceholder.typicode.com/comments", { params: { postId } })
      .pipe(
        delay(1000)
      )
  }
}

// HTTPClient
// Observable => toSignal
// Observable => rxResource
// httpResource
// Observable => Resolve


export const LOADING = new HttpContextToken<boolean>(() => false)
