import { BookData } from './models/bookData.model';
import { CollectionData } from './models/collectionData.model';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { CollectionService } from './collection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'angular-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{

  constructor(private collectionService:CollectionService,private cartService:CartService){

  }
  collectionCount !:number;
  cartCount !:number;

  collectionSubscription:Subscription;
  cartSubscription:Subscription;

  ngOnInit():void{
    this.collectionSubscription = this.collectionService.getCollectionSubject().subscribe(
      (bookData:CollectionData[]) =>{
        this.collectionCount = bookData.length;
      }
    );

    this.cartSubscription = this.cartService.getCartSubject().subscribe(
      (cartData:BookData[]) =>{
        this.cartCount = cartData.length;
      }
    )

  }

  ngOnDestroy():void{
    this.collectionSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();

  }
}
