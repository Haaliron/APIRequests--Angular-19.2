import { Component, inject, output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CreatePost, Post } from '../../models/post';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  private _cardService = inject(CardService);

  created = output<Post>();

  form = this._formBuilder.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  onSubmit() {
    const form = this.form;

    if (form.invalid) {
      alert('Doldur...');
      return;
    }

    const post: CreatePost = {
      ...form.getRawValue(),
      userId: 1,
    };

    this._cardService
      .createPost(post)
      .subscribe((post) => {
        this.created.emit(post);
        alert('Oluşturuldu...')
      });
  }
}
