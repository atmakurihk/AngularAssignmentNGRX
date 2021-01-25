import { BookResponse } from './../../models/bookResponse.model';
import { GetBooks, GET_BOOKS, SetBooks } from './../actions/book.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map } from 'rxjs/operators';
import { AddRecentSearch } from '../actions/search.action';

@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  @Effect()
  getBooks = this.actions$.pipe(ofType(GET_BOOKS),
    switchMap((searchAction: GetBooks) => {
      return this.http.get<BookResponse>('https://www.googleapis.com/books/v1/volumes?q=' + searchAction.searchValue + '&startIndex=0&maxResults=10')
        .pipe(
          map(bookdata => {
            return bookdata.items;
          }))
    }),
    map(books => {
      return new SetBooks(books);
    })
  )

  @Effect()
  updateRecentSearch = this.actions$.pipe(ofType(GET_BOOKS), map((searchAction: GetBooks) => {
    return new AddRecentSearch(searchAction.searchValue);
  }))


}
