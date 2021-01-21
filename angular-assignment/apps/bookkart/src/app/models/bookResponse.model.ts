import { BookData } from './bookData.model';

export interface BookResponse {
  kind: string;
  totalItems: number;
  items: BookData[];
}
