import { BookData } from './models/bookData.model';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test get books', () => {
    expect(service.getBooks).toBeTruthy();
  })

  it('display books method', () => {
    expect(service.displayBooks).toBeTruthy();
  });

  it('display books by id', () => {
    expect(service.getbookById).toBeTruthy();
  })

  it('load books test', () => {
    const books:BookData[] = [];
    expect(service.loadBooks).toBeTruthy();
    expect(service.loadBooks()).toStrictEqual(books);
  })

});
