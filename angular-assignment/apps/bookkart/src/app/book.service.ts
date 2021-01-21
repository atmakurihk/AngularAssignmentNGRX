import { BookData } from './models/bookData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookResponse } from './models/bookResponse.model';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BookData[] = [];
  private bookListUpdated = new Subject<BookData[]>();
  constructor(private http: HttpClient) { }

  getBooks(searchValue: string): void {
    this.books = [];
    this.http.get<BookResponse>('https://www.googleapis.com/books/v1/volumes?q=' + searchValue + '&startIndex=0&maxResults=10')
      .pipe(
        map(bookdata => {
          return bookdata.items;
        })
      )
      .subscribe((bookData) => {
        this.books.push(...bookData);
        this.bookListUpdated.next(this.books.slice());
        console.log("book data",JSON.stringify(this.books));
      },
        error => {
          console.log(error);
        });
  }

  displayBooks(): Observable<BookData[]> {
    return this.bookListUpdated.asObservable();
  }

  getbookById(index: number): BookData {

    return this.books[index];

  }
  loadBooks(): BookData[] {
    return this.books.slice();
  }
}
