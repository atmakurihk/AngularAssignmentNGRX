import { CollectionData } from './../models/collectionData.model';
import { Subscription, Observable } from 'rxjs';
import { CollectionService } from './../collection.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'angular-assignment-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  booksCollection: Observable<{collection:CollectionData[]}>;
  constructor(private collectionService: CollectionService,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.booksCollection = this.store.select('collection');
   /*  this.collectionSubscription = this.collectionService.getCollectionSubject().subscribe(
      (bookData: CollectionData[]) => {
        this.booksCollection = bookData;
      }
    ); */
  }

  ngOnDestroy(): void {

  }

}
