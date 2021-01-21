import { BookService } from './../book.service';
import { BookData } from './../models/bookData.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'angular-assignment-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: BookData[];
  bookListSubscription: Subscription;

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.books = this.bookservice.loadBooks();
    this.bookListSubscription = this.bookservice.
      displayBooks().subscribe((bookData: BookData[]) => {
        this.books = bookData;
      });

  }

  ngOnDestroy(): void {
    this.bookListSubscription.unsubscribe();
  }

}
