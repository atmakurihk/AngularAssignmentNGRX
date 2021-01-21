import { SearchComponent } from './search.component';
describe('search component', () => {
  let fixture: SearchComponent;
  let bookserviceMock: any;

  beforeEach(() => {
    bookserviceMock = {
      getBooks: jest.fn()
    }

    fixture = new SearchComponent(bookserviceMock);
  })
  describe('search books', () => {

    it('search Books', () => {
      const searchString = 'test';
      fixture.searchString = searchString;
      fixture.searchBooks();
      const bookSerivicespy = jest.spyOn(bookserviceMock, 'getBooks');
      expect(bookSerivicespy).toBeCalledTimes(1);
    })
  })

})
