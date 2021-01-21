import { CartService } from './../cart.service';
import { BillingAddress } from './../models/billingAddress.model';
import { CollectionService } from './../collection.service';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'angular-assignment-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  id: number;
  billingForm: FormGroup;
  billingAddress: BillingAddress = null;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private collectionService: CollectionService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
      }
    );
    this.initBillingForm();
  }

  initBillingForm(): void {

    this.billingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
    });

  }
  submitBill(): void {
    if (!isNaN(this.id)) {
      this.collectionService.addToCollection(this.bookService.getbookById(this.id), this.billingForm.value);

    } else {
      this.collectionService.addCartToCollection(this.cartService.getBooksIncart(), this.billingForm.value);
      this.cartService.clearCart();
    }
    this.router.navigate(['/collection']);
  }

  onCancel(): void {
    if (!isNaN(this.id)) {
      this.router.navigate(['/search', this.id])
    } else {
      this.router.navigate(['/cart'])
    }
  }
}
