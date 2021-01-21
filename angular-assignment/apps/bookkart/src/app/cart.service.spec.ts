import { Observable, Subject } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { BookData } from './models/bookData.model';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add to cart', () => {
    expect(service.addToCart).toBeTruthy();
  });

  it('get cart subject', () => {
    const sub = new Subject<BookData[]>();
    expect(service.getCartSubject()).toStrictEqual(sub.asObservable());
  });

  it('get books in cart', () => {
    const bookData: BookData[] = [];
    expect(service.getBooksIncart()).toStrictEqual(bookData);
  });

  it('remove from cart', () => {
    expect(service.removeFromCart).toBeTruthy();
  });

  it('clear cart', () => {
    expect(service.clearCart).toBeTruthy()
  })

});
