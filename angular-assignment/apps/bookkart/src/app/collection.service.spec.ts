import { CollectionData } from './models/collectionData.model';
import { Subject } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { CollectionService } from './collection.service';

describe('CollectionService', () => {
  let service: CollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add to collection test', () => {
    expect(service.addCartToCollection).toBeTruthy();
  });

  it('get collection size', () => {

    expect(service.getCollectionSize()).toBe(0);
  });

  it('get collection subject', () => {
    const sub = new Subject<CollectionData[]>();
    expect(service.getCollectionSubject()).toStrictEqual(sub.asObservable());
  });

  it('get collection data', () => {
    const collectionData: CollectionData[] = [];
    expect(service.getCollectionData()).toStrictEqual(collectionData);

  });
  it('add colletion to cart', () => {
    expect(service.addCartToCollection).toBeTruthy();
  });
});
