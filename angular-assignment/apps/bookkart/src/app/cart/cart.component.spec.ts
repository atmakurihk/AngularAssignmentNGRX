import { of, Subscription } from 'rxjs';
import { CartService } from './../cart.service';
import { BookData } from './../models/bookData.model';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorTransformPipe } from './../shared/author-transform.pipe';
import { TruncatePipe } from './../shared/truncate.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { Router } from '@angular/router';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent,
        TruncatePipe,
        AuthorTransformPipe],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test ng oninit', () => {
    it('should subscribe to book data', () => {
      const app = fixture.componentInstance;
      const cartValue: BookData[] = [];
      const collectionSpy = spyOn(cartService, 'getCartSubject').and.returnValue(of(cartValue));
      fixture.detectChanges();
      expect(app.books.length).toBe(0);
    });

    it('should load intial data of books', () => {
      const app = fixture.componentInstance;
      const cartValue: BookData[] = [];
      const cartcollectionspy = spyOn(cartService, 'getBooksIncart').and.returnValue(cartValue);
      fixture.detectChanges();
      expect(app.books.length).toBe(0);
    })
  });

  describe('test methods in cart component', () => {
    it('remove Item', () => {
      const app = fixture.componentInstance;
      const index = 1;
      const cartRemoveSpy = spyOn(cartService, 'removeFromCart');
      fixture.detectChanges();
      app.removeItem(index);
      expect(cartRemoveSpy).toHaveBeenCalledTimes(1);
    });

    it('chekout', () =>{
      const app = fixture.componentInstance;
      const routerService= fixture.debugElement.injector.get(Router);
      const routerSpy = spyOn(routerService,'navigate');
      app.checkOut()
      expect(routerSpy).toHaveBeenCalledWith(["/buy"]);
    });
  });

  describe('On ng destroy',() =>{
    it('unsubscribe in destroy',() =>{
      const app = fixture.componentInstance;
      const subscription = app.cartDataSubscription;
      const subSpy = spyOn(subscription,'unsubscribe');
      app.ngOnDestroy();
      expect(subSpy).toHaveBeenCalled();
    });
  })
});
