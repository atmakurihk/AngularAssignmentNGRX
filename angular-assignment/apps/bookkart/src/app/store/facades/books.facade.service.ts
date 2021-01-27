import { GetBooks } from './../actions/book.actions';
import { BookData } from './../../models/bookData.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { AppState } from '../state/app.state';

@Injectable({
  providedIn: 'root'
})
export class BooksFacadeService {

  books: Observable<{ books: BookData[] }>;
  constructor(private store: Store<AppState>) {
    this.books = this.store.select('books');
  }

  getBooks(searchValue:string)
  {
    this.store.dispatch(new GetBooks(searchValue));
  }
}
