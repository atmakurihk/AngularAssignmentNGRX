import { BookData } from "../../models/bookData.model";

export interface CartState {
  cart: BookData[];
}

export const initialCartState: CartState = {

  cart: []
}
