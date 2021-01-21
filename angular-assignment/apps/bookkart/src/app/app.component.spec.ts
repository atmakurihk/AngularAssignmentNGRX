import { BookData } from './models/bookData.model';
import { CartService } from './cart.service';
import { CollectionData } from './models/collectionData.model';
import { of, Subscription } from 'rxjs';
import { CollectionService } from './collection.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let cartService: any;
  let collectionService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    cartService = fixture.debugElement.injector.get(CartService);
    collectionService = fixture.debugElement.injector.get(CollectionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Test ng oninit', () => {
    it('subscribe for collection count', () => {
      const app = fixture.componentInstance;
      const collectionValue: CollectionData[] = [];
      const collectionSpy = spyOn(collectionService, 'getCollectionSubject').and.returnValue(of(collectionValue));
      fixture.detectChanges();
      app.ngOnInit();
      expect(app.collectionCount).toBe(0);
    });

    it('subscribe for cart count', () => {
      const app = fixture.componentInstance;
      const cartvalue: BookData[] = [];
      const cartSpy = spyOn(cartService, 'getCartSubject').and.returnValue(of(cartvalue));
      fixture.detectChanges();
      app.ngOnInit();
      expect(app.cartCount).toBe(0);
    });
  });

  describe('Test ng on destroy', () => {
    it('un subscribe collection subject', () => {
      const app = fixture.componentInstance;
      const subscription = app.collectionSubscription;
      const subSpy = spyOn(subscription, 'unsubscribe');
      fixture.detectChanges();
      app.ngOnDestroy();
      expect(subSpy).toHaveBeenCalled();
    });
    it('un subscribe cart subject', () => {
      const app = fixture.componentInstance;
      const subscription = app.cartSubscription;
      const subSpy = spyOn(subscription, 'unsubscribe');
      fixture.detectChanges();
      app.ngOnDestroy();
      expect(subSpy).toHaveBeenCalled();
    });
  })
});
