import { CartFacade } from './../store/facades/cart.facade.service';
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
  let cartFacade: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent,
        TruncatePipe,
        AuthorTransformPipe],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule,
        
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartFacade = fixture.debugElement.injector.get(CartFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test ng oninit', () => {
    it('should subscribe to book data', () => {
      const app = fixture.componentInstance;
      const cartValue: BookData[] = [];
      fixture.detectChanges();
      expect(app.books).toBeTruthy();
    });
  });

  describe('test methods in cart component', () => {
    it('remove Item', () => {
      const app = fixture.componentInstance;
      const index = 1;
      const cartRemoveSpy = spyOn(cartFacade, 'removeFromCart');
      fixture.detectChanges();
      app.removeItem(index);
      expect(cartRemoveSpy).toHaveBeenCalledTimes(1);
    });

    it('chekout', () => {
      const app = fixture.componentInstance;
      const routerService = fixture.debugElement.injector.get(Router);
      const routerSpy = spyOn(routerService, 'navigate');
      app.checkOut()
      expect(routerSpy).toHaveBeenCalledWith(["/buy"]);
    });
  });
});
