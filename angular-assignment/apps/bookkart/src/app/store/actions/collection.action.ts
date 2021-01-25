import { Action } from '@ngrx/store';
import { CollectionData } from './../../models/collectionData.model';
export const ADD_BOOK_TO_COLLECTION = '[collection] ADD_BOOK_TO_COLLECTION';
export const ADD_CART_TO_COLLECTION = '[collection] ADD_CART_TO_COLLECTION';

export class AddBookToCollection implements Action {
  readonly type = ADD_BOOK_TO_COLLECTION;
  constructor(public payload: CollectionData) { }
}

export class AddCartToCollection implements Action {
  readonly type = ADD_CART_TO_COLLECTION;
  constructor(public payload: CollectionData[]) { }
}

export type collectionActions = AddBookToCollection|AddCartToCollection;
