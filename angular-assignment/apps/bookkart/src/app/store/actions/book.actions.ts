import { BookData } from './../../models/bookData.model';
import { Action } from '@ngrx/store';

export const GET_BOOKS = '[books] GET_BOOKS';
export const SET_BOOKS = '[books] SET_BOOKS';

export class GetBooks implements Action {
  readonly type = GET_BOOKS;
  constructor(public searchValue: string) { }
}

export class SetBooks implements Action{
  readonly type = SET_BOOKS;
  constructor(public payload:BookData[]){}

}
export type booksActions = GetBooks|SetBooks;
