import { BookData } from './../models/bookData.model';
import { of } from 'rxjs';
import { BookService } from './../book.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let bookService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    bookService = fixture.debugElement.injector.get(BookService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test ng on init', () => {
    it('Test subscription', () => {
      const app = fixture.componentInstance;
      const books: BookData[] = [];
      const collectionSpy = spyOn(bookService, 'displayBooks').and.returnValue(
        of(books)
      );
      fixture.detectChanges();
      expect(app.books.length).toBe(0);
    });
    it('Test load books intially', () => {
      const app = fixture.componentInstance;
      const books: BookData[] = [];
      const collectionSpy = spyOn(bookService, 'loadBooks').and.returnValue(
        books
      );
      fixture.detectChanges();
      expect(app.books.length).toBe(0);
    });
  });

  describe('Test component on ng destroy', () => {
    it('Test un subscribe subject', () => {
      const app = fixture.componentInstance;
      const subscription = app.bookListSubscription;
      const subSpy = spyOn(subscription, 'unsubscribe');
      app.ngOnDestroy();
      expect(subSpy).toHaveBeenCalled();
    });
  });
});
