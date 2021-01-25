import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { bookReducer } from "./book.reducer";
import { cartReducer } from "./cart.reducer";
import { collectionReducer } from "./collection.reducer";
import { searchReducer } from "./search.reducer";
import { userDetailReducer } from "./userDetails.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  books: bookReducer,
  collection: collectionReducer,
  search: searchReducer,
  userDetails:userDetailReducer

}
