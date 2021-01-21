import { ImageLinks } from './image.model';
export interface VolumeInfo {
  title: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  averageRating: number;
  ratingsCount: number;
  imageLinks: ImageLinks;
  language: string;
}
