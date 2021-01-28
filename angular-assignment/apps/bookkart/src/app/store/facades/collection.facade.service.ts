import { selectCollection } from './../selectors/state.selector';
import { CollectionData } from './../../models/collectionData.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddBookToCollection, AddCartToCollection } from '../actions/collection.action';

@Injectable({
  providedIn: 'root'
})
export class CollectionFacade {

  booksCollection: Observable<CollectionData[]>;
  constructor(private store: Store<AppState>) {
    this.booksCollection = this.store.pipe(select(selectCollection))
  }

  addToCollection(collection: CollectionData) {
    this.store.dispatch(new AddBookToCollection(collection));
  }

  addCartToCollection(collections: CollectionData[]) {
    this.store.dispatch(new AddCartToCollection(collections));
  }
}
