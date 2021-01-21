import { AuthorTransformPipe } from './author-transform.pipe';

describe('AuthorTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorTransformPipe();
    expect(pipe).toBeTruthy();
  });

  it('test author string', () => {
    const pipe = new AuthorTransformPipe();
    let strArry = ['author1', 'author2'];
    let expectedString = 'author1 & author2';
    expect(pipe.transform(strArry)).toEqual(expectedString);
  })
});
