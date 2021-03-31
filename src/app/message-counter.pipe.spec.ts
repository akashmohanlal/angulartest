import { MessageCounterPipe } from './message-counter.pipe';

describe('MessageCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new MessageCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
