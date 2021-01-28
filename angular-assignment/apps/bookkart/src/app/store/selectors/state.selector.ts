import { CollectionState } from './../state/collection.state';

import { BookState } from './../state/book.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { CartState } from '../state/cart.state';


const selectBooksState = (state: AppState) => state.books;

export const selectBooks = createSelector(
  selectBooksState,
  (state: BookState) => state.books
);

const selectCartState = (state: AppState) => state.cart;

export const selectCart = createSelector(
  selectCartState,
  (state: CartState) => state.cart
);

const selectCollectionState = (state: AppState) => state.collection;

export const selectCollection = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.collection
);

