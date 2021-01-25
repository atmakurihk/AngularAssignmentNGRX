import { Action } from "@ngrx/store";
import { BookData } from "../../models/bookData.model";


export const ADD_TO_CART = '[cart] ADD_TO_CART';
export const REMOVE_FROM_CART = '[cart] REMOVE_FROM_CART';
export const CLEAR_CART = '[cart] CLEAR_CART';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART
  constructor(public payload: BookData) { }
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;
  constructor(public index: number) { }
}

export class ClearCart implements Action {
  readonly type = CLEAR_CART;
}
export type cartActions = AddToCart | RemoveFromCart | ClearCart;
