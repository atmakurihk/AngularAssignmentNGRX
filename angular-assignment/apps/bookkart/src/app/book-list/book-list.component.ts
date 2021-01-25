import { BookService } from './../book.service';
import { BookData } from './../models/bookData.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'angular-assignment-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<{ books: BookData[] }>;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books = this.store.select('books');
  }

}
