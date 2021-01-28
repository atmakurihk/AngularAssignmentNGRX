import { selectCart } from './../selectors/state.selector';
import { AddToCart, ClearCart, RemoveFromCart } from './../actions/cart.action';
import { BookData } from './../../models/bookData.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../state/app.state";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {

  books: Observable<BookData[]>
  constructor(private store: Store<AppState>) {
    this.books = this.store.pipe(select(selectCart))
  }

  removeFromCart(index: number) {
    this.store.dispatch(new RemoveFromCart(index));
  }

  addToCart(book: BookData) {
    this.store.dispatch(new AddToCart(book));
  }

  clearCart() {
    this.store.dispatch(new ClearCart());
  }
}
