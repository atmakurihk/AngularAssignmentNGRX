import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'angular-assignment-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  searchString = '';
  constructor(private bookService: BookService) { }

  searchBooks(): void {
    this.bookService.getBooks(this.searchString);
  }
}
