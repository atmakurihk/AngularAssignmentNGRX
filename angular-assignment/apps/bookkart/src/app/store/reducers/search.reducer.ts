
import { intialSearchState } from './../state/search.state';
import * as IsearchActions from './../actions/search.action';
export function searchReducer(state = intialSearchState, action: IsearchActions.searchActions) {
  switch (action.type) {
    case IsearchActions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      }
    case IsearchActions.ADD_RECENT_SEARCH:
      return {
        ...state,
        recentSearches: [...state.recentSearches, action.payload]
      }
    default:
      return state
  }
}
