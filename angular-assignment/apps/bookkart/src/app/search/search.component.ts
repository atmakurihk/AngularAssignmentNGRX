import { SearchFacade } from './../store/facades/search.facade.service';
import { BooksFacadeService } from './../store/facades/books.facade.service';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchString = '';
  constructor(private booksFacade: BooksFacadeService,
    private searchFacade: SearchFacade) { }

  searchBooks(): void {

    this.searchFacade.setSearch(this.searchString);
    this.booksFacade.getBooks(this.searchString);
  }
}
