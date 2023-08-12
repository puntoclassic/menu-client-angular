import { PriceOutputPipe } from './price-output.pipe';

describe('PriceOutputPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceOutputPipe();
    expect(pipe).toBeTruthy();
  });
});
