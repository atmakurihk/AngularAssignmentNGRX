import { intialCollectionState } from './../state/collection.state';
import * as IcollectionActions from '../actions/collection.action';
export function collectionReducer(state = intialCollectionState, action: IcollectionActions.collectionActions) {

  switch (action.type) {
    case IcollectionActions.ADD_BOOK_TO_COLLECTION:
      return {
        ...state,
        collection: [...state.collection, action.payload]
      };
    case IcollectionActions.ADD_CART_TO_COLLECTION:
      return {
        ...state,
        collection: [...state.collection, ...action.payload]
      };

    default:
      return state;
  }
}
