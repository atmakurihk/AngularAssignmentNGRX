import { BookData } from './../../models/bookData.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: BookData;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.book.volumeInfo.title;
  }

  get image(): string {
    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }

  get description(): string {
    return this.book.volumeInfo.description;
  }
  get authors(): string[] {
    return this.book.volumeInfo.authors;
  }
}
