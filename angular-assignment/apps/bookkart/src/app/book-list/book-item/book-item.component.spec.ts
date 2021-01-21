import { BookData } from './../../models/bookData.model';
import { BookItemComponent } from './book-item.component';
describe('Test BookItem Component', () => {
  let fixture: BookItemComponent;
  let bookMock: BookData;
  beforeEach(() => {
    fixture = new BookItemComponent();
    bookMock = {
      "kind": "books#volume",
      "id": "0BSOg0oHhZ0C",
      "etag": "sWJBeRbxMK0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/0BSOg0oHhZ0C",
      "volumeInfo": {
        "title": "Angular Momentum in Quantum Mechanics",
        "authors": [
          "A. R. Edmonds"
        ],
        "publisher": "Princeton University Press",
        "publishedDate": "1996",
        "description": "This book offers a concise introduction to the angular momentum, one of the most fundamental quantities in all of quantum mechanics. Beginning with the quantization of angular momentum, spin angular momentum, and the orbital angular momentum, the author goes on to discuss the Clebsch-Gordan coefficients for a two-component system. After developing the necessary mathematics, specifically spherical tensors and tensor operators, the author then investigates the 3-j, 6-j, and 9-j symbols. Throughout, the author provides practical applications to atomic, molecular, and nuclear physics. These include partial-wave expansions, the emission and absorption of particles, the proton and electron quadrupole moment, matrix element calculation in practice, and the properties of the symmetrical top molecule.",
        "pageCount": 146,
        "averageRating": 4,
        "ratingsCount": 1,
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=0BSOg0oHhZ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
      },
    }
    fixture.ngOnInit();
  })

  it('test componet intialization', () => {
    expect(fixture).toBeTruthy();
  })

  describe('test getters on component', () => {
    beforeEach(() => {
      fixture.book = bookMock;
    });

    it('get title', () => {
      expect(fixture.title).toBe(bookMock.volumeInfo.title);
    });

    it('get Image', () => {
      expect(fixture.image).toBe(bookMock.volumeInfo.imageLinks.smallThumbnail);
    })

    it('get description', () => {
      expect(fixture.description).toBe(bookMock.volumeInfo.description);
    });

    it('get autors', () => {
      expect(fixture.authors).toBe(bookMock.volumeInfo.authors);
    })
  })
})
