import { CollectionData } from './../../models/collectionData.model';

export interface CollectionState {
  collection: CollectionData[];
}

export const intialCollectionState: CollectionState = {
  collection: []
}
