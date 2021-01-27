import { UserFacade } from './../store/facades/user.facade.service';
import { CartFacade } from './../store/facades/cart.facade.service';
import { BooksFacadeService } from './../store/facades/books.facade.service';
import { CollectionData } from './../models/collectionData.model';
import { map, switchMap } from 'rxjs/operators';
import { BookData } from './../models/bookData.model';
import { BillingAddress } from './../models/billingAddress.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionFacade } from '../store/facades/collection.facade.service';

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
    private booksFacade: BooksFacadeService,
    private collectionFacade: CollectionFacade,
    private cartFacade: CartFacade,
    private userFacade: UserFacade,
    private router: Router) { }

  ngOnInit(): void {
    this.initBillingForm();

    this.route.params.pipe(
      map(params => {
        return +params.id;
      }), switchMap(id => {
        this.id = id;
        return this.booksFacade.books;
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
      this.collectionFacade.addToCollection(new CollectionData(this.boughtBook, this.billingForm.value));
    } else {
      this.cartFacade.books.subscribe((cartState) => {
        this.booksInCart = cartState.cart;
      })
      this.collectionFacade.addCartToCollection(this.collectionUtility(this.booksInCart, this.billingForm.value));
      this.cartFacade.clearCart();
    }
    this.userFacade.saveUser(<BillingAddress>this.billingForm.value);
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
