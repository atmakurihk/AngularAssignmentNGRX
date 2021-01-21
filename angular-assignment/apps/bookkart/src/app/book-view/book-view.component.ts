import { CartService } from './../cart.service';
import { BookService } from './../book.service';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'angular-assignment-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private router: Router) { }

  book: BookData;
  id: number;
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );
    this.book = this.bookService.getbookById(this.id);
  }
  addToCart(): void {
    this.cartService.addToCart(this.book);
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
