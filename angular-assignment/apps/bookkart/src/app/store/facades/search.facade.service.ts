import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { AppState } from '../state/app.state';
import { SetSearch } from '../actions/search.action';

@Injectable({
  providedIn: 'root'
})
export class SearchFacade {
  constructor(private store: Store<AppState>) { }

  setSearch(searchValue: string) {
    this.store.dispatch(new SetSearch(searchValue));
  }
}
