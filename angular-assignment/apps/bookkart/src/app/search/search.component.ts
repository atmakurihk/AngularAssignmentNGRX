import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetBooks } from '../store/actions/book.actions';
import { SetSearch } from '../store/actions/search.action';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'angular-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchString = '';
  constructor(private store: Store<AppState>) { }

  searchBooks(): void {

    this.store.dispatch(new SetSearch(this.searchString));
    this.store.dispatch(new GetBooks(this.searchString));
  }
}
