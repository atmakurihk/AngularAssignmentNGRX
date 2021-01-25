import { BookData } from './../../models/bookData.model';
export interface BookState {
  books: BookData[];

}

export const intialBookState: BookState = {

  books: []
}
