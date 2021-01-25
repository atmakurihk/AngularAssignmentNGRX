import { BookData } from './models/bookData.model';
import { CollectionData } from './models/collectionData.model';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { CollectionService } from './collection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';

@Component({
  selector: 'angular-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private collectionService: CollectionService,
    private cartService: CartService,
    private store: Store<AppState>) {

  }
  collectionCount !: number;
  cartCount !: number;

  collectionSubscription: Subscription;
  cartSubscription: Subscription;

  ngOnInit(): void {
    this.collectionSubscription = this.store.select('collection').subscribe(
      (stateData) => {
        this.collectionCount = stateData.collection.length;
      }
    )


    this.cartSubscription = this.store.select('cart').subscribe(
      (stateData) => {
        this.cartCount = stateData.cart.length;
      }
    )


  }

  ngOnDestroy(): void {
    this.collectionSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();

  }
}
