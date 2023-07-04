import { NullCheckPipe } from './null-check.pipe';

describe('NullCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new NullCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
