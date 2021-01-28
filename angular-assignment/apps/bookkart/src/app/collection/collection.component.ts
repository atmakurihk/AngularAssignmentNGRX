import { CollectionFacade } from './../store/facades/collection.facade.service';
import { CollectionData } from './../models/collectionData.model';
import {  Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-assignment-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  booksCollection: Observable<CollectionData[]>;
  constructor(private collectionFacade: CollectionFacade) { }

  ngOnInit(): void {
    this.booksCollection = this.collectionFacade.booksCollection;
  }

}
