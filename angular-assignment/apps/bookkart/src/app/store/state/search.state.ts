export interface SearchState {
  searchValue: string,
  recentSearches:string[]
}

export const intialSearchState = {
  searchValue: '',
  recentSearches: []
}
