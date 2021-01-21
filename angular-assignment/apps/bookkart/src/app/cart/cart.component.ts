import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookData } from './../models/bookData.model';
import { CartService } from './../cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'angular-assignment-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService, private router: Router) { }
  books: BookData[];
  cartDataSubscription: Subscription;
  ngOnInit(): void {

    this.books = this.cartService.getBooksIncart();
    this.cartDataSubscription = this.cartService.getCartSubject()
      .subscribe((bookdata: BookData[]) => {
        this.books = bookdata;
      });
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }
  checkOut() {
    this.router.navigate(['/buy']);
  }

  ngOnDestroy(): void {
    this.cartDataSubscription.unsubscribe();
  }
}
