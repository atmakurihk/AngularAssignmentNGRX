import { CollectionData } from './../../models/collectionData.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddBookToCollection, AddCartToCollection } from '../actions/collection.action';

@Injectable({
  providedIn: 'root'
})
export class CollectionFacade {

  booksCollection: Observable<{ collection: CollectionData[] }>;
  constructor(private store: Store<AppState>) {
    this.booksCollection = this.store.select('collection');
  }

  addToCollection(collection: CollectionData) {
    this.store.dispatch(new AddBookToCollection(collection));
  }

  addCartToCollection(collections: CollectionData[]) {
    this.store.dispatch(new AddCartToCollection(collections));
  }
}
