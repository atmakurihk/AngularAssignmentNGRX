import { Action } from '@ngrx/store';


export const SET_SEARCH_VALUE = '[search] SET_SEARCH_VALUE';
export const ADD_RECENT_SEARCH = '[search] ADD_RECENT_SEARCH';

export class SetSearch implements Action {
  readonly type = SET_SEARCH_VALUE;
  constructor(public payload: string) { }
}

export class AddRecentSearch implements Action {
  readonly type = ADD_RECENT_SEARCH;
  constructor(public payload: string) { }
}

export type searchActions = SetSearch | AddRecentSearch;
