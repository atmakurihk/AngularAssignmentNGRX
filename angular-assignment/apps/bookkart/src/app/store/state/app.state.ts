import { BillingState, intialBillingState } from './billing.state';
import { BookState, intialBookState } from './book.state';
import { CartState, initialCartState } from "./cart.state";
import { CollectionState, intialCollectionState } from './collection.state';
import { SearchState, intialSearchState } from './search.state';

export interface AppState {
  cart: CartState;
  books: BookState;
  collection: CollectionState;
  search: SearchState;
  userDetails: BillingState
}

export const intialAppState: AppState = {
  cart: initialCartState,
  books: intialBookState,
  collection: intialCollectionState,
  search: intialSearchState,
  userDetails: intialBillingState
}
