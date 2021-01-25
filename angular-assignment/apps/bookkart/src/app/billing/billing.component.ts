import { SaveUserAction } from './../store/actions/userDetails.action';
import { CollectionData } from './../models/collectionData.model';
import { map, switchMap } from 'rxjs/operators';
import { BookData } from './../models/bookData.model';
import { BillingAddress } from './../models/billingAddress.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { AddBookToCollection, AddCartToCollection } from '../store/actions/collection.action';
import { ClearCart } from '../store/actions/cart.action';

@Component({
  selector: 'angular-assignment-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  id: number;
  boughtBook: BookData;
  billingForm: FormGroup;
  billingAddress: BillingAddress = null;
  booksInCart: BookData[];
  constructor(private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit(): void {
    this.initBillingForm();

    this.route.params.pipe(
      map(params => {
        return +params.id;
      }), switchMap(id => {
        this.id = id;
        return this.store.select('books');
      }), map(bookState => {
        return bookState.books.find((book, index) => {
          return index === this.id
        })
      })
    ).subscribe((book) => {
      this.boughtBook = book;
    })
  }

  initBillingForm(): void {

    this.billingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    });

  }
  submitBill(): void {
    if (!isNaN(this.id)) {

      this.store.dispatch(new AddBookToCollection(new CollectionData(this.boughtBook, this.billingForm.value)));

    } else {
      this.store.select('cart').subscribe((cartState) => {
        this.booksInCart = cartState.cart;
      })
      this.store.dispatch(new AddCartToCollection(this.collectionUtility(this.booksInCart, this.billingForm.value)));
      this.store.dispatch(new ClearCart());
    }
    this.store.dispatch(new SaveUserAction(<BillingAddress>this.billingForm.value));
    this.router.navigate(['/collection']);
  }

  onCancel(): void {
    if (!isNaN(this.id)) {
      this.router.navigate(['/search', this.id])
    } else {
      this.router.navigate(['/cart'])
    }
  }

  private collectionUtility(books: BookData[], billinForm: BillingAddress): CollectionData[] {
    const collectionList: CollectionData[] = [];
    books.forEach(
      (book) => {
        collectionList.push(new CollectionData(book, billinForm));
      }
    );
    return collectionList;
  }
}
