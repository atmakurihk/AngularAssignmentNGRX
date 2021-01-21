import { BookData } from './../models/bookData.model';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { BookViewComponent } from './book-view.component';

describe('book view component', () => {
  let fixture: BookViewComponent;
  let routerMock: any;
  let bookServiceMock: any;
  let cartServiceMock: any;
  let routeMock: any;
  let bookMock: BookData;
  beforeEach(() => {
    bookServiceMock = {
      getbookById: jest.fn()
    };
    cartServiceMock = {
      addToCart: jest.fn()
    };
    routerMock = {
      navigate: jest.fn()
    };
    routeMock = {
      params: of(convertToParamMap({ id: '123' }))
    };
    bookMock = {
      "kind": "books#volume",
      "id": "0BSOg0oHhZ0C",
      "etag": "sWJBeRbxMK0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
      "volumeInfo": {
        "title": "Angular Momentum in Quantum Mechanics",
        "authors": [
          "A. R. Edmonds"
        ],
        "publisher": "Princeton University Press",
        "publishedDate": "1996",
        "description": "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
        "pageCount": 146,
        "averageRating": 4,
        "ratingsCount": 1,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
      },
    }

    fixture = new BookViewComponent(
      routeMock,
      bookServiceMock,
      cartServiceMock,
      routerMock
    );
    fixture.ngOnInit();

  });

  describe('Test ngOninit book view component', () => {

    it('should get params', () => {
      expect(routeMock.params).toBeTruthy();
    });

    it('should get book by id', () => {
      let book: any = {};
      let id = '123';
      const bookServicespy = jest.spyOn(bookServiceMock, 'getbookById').mockReturnValue(book);
      expect(bookServiceMock.getbookById([id])).toBe(book);
      expect(bookServicespy).toHaveBeenCalled();
    });
  });

  describe('Test add to cart', () => {
    it('add to cart', () => {
      const cartserviceSpy = jest.spyOn(cartServiceMock, 'addToCart');
      fixture.addToCart();
      expect(cartserviceSpy).toBeCalledTimes(1);
    });
  });

  describe('test buy now', () => {
    it('click buy now', () => {
      fixture.buyNow();
      expect(routerMock.navigate).toHaveBeenCalledWith([fixture.id, 'buy']);
    });

  });

  describe('Test getters', () =>{
    beforeEach(() =>{
      fixture.book = bookMock;
    });
    it('get title',() =>{
      expect(fixture.title).toBe('Angular Momentum in Quantum Mechanics');
    });
    it('get image',() =>{
      expect(fixture.image).toBe('http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api');
    });
    it('get average rating',() =>{
      expect(fixture.averageRating).toBe(4);
    });

    it('get publisher',() =>{
      expect(fixture.publisher).toBe('Princeton University Press');
    });
    it('get page count',() =>{
      expect(fixture.pageCount).toBe(146);
    });
    it('get language', () =>{
      expect(fixture.language).toBe('en');
    });
    it('get description', () =>{
      expect(fixture.description).toBe(bookMock.volumeInfo.description);
    });
    it('get authors',() =>{
      expect(fixture.authors).toBe(bookMock.volumeInfo.authors);
    });
  })
});
