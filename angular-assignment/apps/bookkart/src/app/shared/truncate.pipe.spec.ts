import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('return truncated string',()=>{
    const pipe = new TruncatePipe();
    expect(pipe.transform("test")).toEqual("test")
  });
});
