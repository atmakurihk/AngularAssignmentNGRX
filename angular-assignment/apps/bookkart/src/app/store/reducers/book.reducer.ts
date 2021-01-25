import { intialBookState } from './../state/book.state';
import * as IbookActions from '../actions/book.actions';

export function bookReducer(state = intialBookState, action: IbookActions.booksActions) {

  switch(action.type)
  {
    case IbookActions.SET_BOOKS:{
      return{
        ...state,
      books:[...state.books,...action.payload]
      }
    };
    default:
      return state;
  }
}
