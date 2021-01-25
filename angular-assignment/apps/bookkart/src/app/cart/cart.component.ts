import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { BookData } from './../models/bookData.model';
import { CartService } from './../cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { RemoveFromCart } from '../store/actions/cart.action';

@Component({
  selector: 'angular-assignment-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService,
             private router: Router,
             private store:Store<AppState>) { }
  books: Observable<{cart:BookData[]}>
  cartDataSubscription: Subscription;
  ngOnInit(): void {

    this.books=this.store.select('cart');
    //this.books = this.cartService.getBooksIncart();
     /* this.cartDataSubscription = this.cartService.getCartSubject()
      .subscribe((bookdata: BookData[]) => {
        this.books = bookdata;
      }); */
  }

  removeItem(index: number) {
    //this.cartService.removeFromCart(index);
    this.store.dispatch(new RemoveFromCart(index));
  }
  checkOut() {
    this.router.navigate(['/buy']);
  }

  ngOnDestroy(): void {
   /*  this.cartDataSubscription.unsubscribe(); */
  }
}
