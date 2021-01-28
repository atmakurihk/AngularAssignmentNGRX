import { CartFacade } from './../store/facades/cart.facade.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router,
    private cartFacade: CartFacade) { }
  books: Observable<BookData[]>
  ngOnInit(): void {
    this.books = this.cartFacade.books;
  }
  removeItem(index: number) {
    this.cartFacade.removeFromCart(index);
  }
  checkOut() {
    this.router.navigate(['/buy']);
  }
}
