import { BooksFacadeService } from './../store/facades/books.facade.service';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-assignment-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable< BookData[]>;


  constructor(private bookFacade: BooksFacadeService) { }

  ngOnInit(): void {
    this.books = this.bookFacade.books;
    this.books.subscribe((bookData) => console.log("bookdata",bookData));
  }

}
