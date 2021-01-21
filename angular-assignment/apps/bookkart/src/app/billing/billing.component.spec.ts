import { BookData } from './../models/bookData.model';
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';
import { BillingComponent } from './billing.component';

describe('billingComponent', () => {
  let fixture: BillingComponent;
  let bookServiceMock: any;
  let cartServiceMock: any;
  let collectionServiceMock: any;
  let routerMock: any;
  let routeMock: any;

  beforeEach(() => {

    bookServiceMock = {
      getbookById: jest.fn(),

    };
    collectionServiceMock = {
      addToCollection: jest.fn(),
      addCartToCollection: jest.fn()
    };
    cartServiceMock = {
      getBooksIncart: jest.fn(),
      clearCart: jest.fn()

    };
    routerMock = {
      navigate: jest.fn()
    };
    routeMock = {
      params: of(convertToParamMap({ id: '123' }))

    };

    fixture = new BillingComponent(
      routeMock,
      bookServiceMock,
      cartServiceMock,
      cartServiceMock,
      routerMock
    );
    fixture.ngOnInit();
  });
  describe('Test: ngOnInit', () => {
    it('should get params', () => {
      expect(routeMock.params).toBeTruthy();
    });

    it('should get form intialized', () => {
      const billingForm = {
        name: null,
        email: null,
        mobile: null,
        address: null,
      }

      expect(fixture.billingForm.value).toEqual(billingForm);
    });
  });

  describe('Test billing form ', () => {
    it('should invalidate the form', () => {
      fixture.billingForm.controls.name.setValue('');
      fixture.billingForm.controls.email.setValue('');
      fixture.billingForm.controls.mobile.setValue('');
      fixture.billingForm.controls.address.setValue('');
      expect(fixture.billingForm.valid).toBeFalsy();
    });

    it('billing form with invalid email', () => {
      fixture.billingForm.controls.name.setValue('Test user');
      fixture.billingForm.controls.email.setValue('TestInvalid email');
      fixture.billingForm.controls.mobile.setValue('1233333');
      fixture.billingForm.controls.address.setValue('Test address');
      expect(fixture.billingForm.valid).toBeFalsy();
    });


    it('billing form with valid data', () => {
      fixture.billingForm.controls.name.setValue('Test user');
      fixture.billingForm.controls.email.setValue('test@tes.com');
      fixture.billingForm.controls.mobile.setValue('1233333');
      fixture.billingForm.controls.address.setValue('Test address');
      expect(fixture.billingForm.valid).toBeTruthy();
    });

  });

  describe('Test submit bill', () => {
    it('should submit bill', () => {
      const bookData: any = {};
      const billingForm = {
        name: 'test',
        email: 'test@tes.com',
        mobile: '123333',
        address: 'test address',
      }
      const collectionServiceSpy = jest.spyOn(collectionServiceMock, 'addToCollection');
      expect(collectionServiceMock.addToCollection([bookData, billingForm]));
      expect(collectionServiceSpy).toHaveBeenLastCalledWith([bookData, billingForm]);
    });

    it('should submit cart', () => {
      const cartdata: BookData[] = [];
      const billingForm = {
        name: 'test',
        email: 'test@tes.com',
        mobile: '123333',
        address: 'test address',
      }
      const collectionServiceSpy = jest.spyOn(collectionServiceMock, 'addCartToCollection');
      expect(collectionServiceMock.addCartToCollection([cartdata, billingForm]));
      expect(collectionServiceSpy).toHaveBeenLastCalledWith([cartdata, billingForm]);
    });
  });

  describe('Test on cancel', () => {
    it('should navigate from page', () => {
      fixture.id = 1;
      fixture.onCancel();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/search', fixture.id]);
    });

    it('should navigate to cart', () => {
      fixture.id = NaN;
      fixture.onCancel();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/cart']);
    })
  });
});
