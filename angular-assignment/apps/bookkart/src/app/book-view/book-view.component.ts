import { map, switchMap } from 'rxjs/operators';
import { cartActions, AddToCart } from './../store/actions/cart.action';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'angular-assignment-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store:Store<AppState>) { }

  book: BookData;
  id: number;
  ngOnInit(): void {

    this.route.params.pipe(
      map(params =>{
        return +params.id;
      }), switchMap(id =>{
        this.id = id;
        return this.store.select('books');
      }),
      map(booksState =>{
        return booksState.books.find((book,index) =>{
          return index === this.id;
        })
      })
    ).subscribe((book) =>{
      this.book = book;
    })
  }
  addToCart(): void {
    this.store.dispatch(new AddToCart(this.book));
  }
  buyNow(): void {
    this.router.navigate([this.id, 'buy']);
  }

  get title(): string {
    return this.book.volumeInfo.title;
  }

  get image(): string {
    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  get averageRating(): number {

    return this.book.volumeInfo.averageRating;
  }

  get publisher(): string {
    return this.book.volumeInfo.publisher;
  }

  get pageCount(): number {
    return this.book.volumeInfo.pageCount;
  }

  get language(): string {
    return this.book.volumeInfo.language;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }

  get authors(): string[] {
    return this.book.volumeInfo.authors;
  }
}
