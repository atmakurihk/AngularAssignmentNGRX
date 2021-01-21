import { BillingAddress } from './billingAddress.model';
import { BookData } from './bookData.model';
export class CollectionData {
  public bookData: BookData;
  public billingAddress: BillingAddress;

  constructor(book: BookData, billaddress: BillingAddress) {
    this.bookData = book;
    this.billingAddress = billaddress;
  }
}
