import { CollectionData } from './../models/collectionData.model';
import { Subscription } from 'rxjs';
import { CollectionService } from './../collection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'angular-assignment-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  booksCollection: CollectionData[];
  constructor(private collectionService: CollectionService) { }
  collectionSubscription: Subscription;
  ngOnInit(): void {
    this.booksCollection = this.collectionService.getCollectionData();
    this.collectionSubscription = this.collectionService.getCollectionSubject().subscribe(
      (bookData: CollectionData[]) => {
        this.booksCollection = bookData;
      }
    );
  }

  ngOnDestroy(): void {
    this.collectionSubscription.unsubscribe();
  }

}
