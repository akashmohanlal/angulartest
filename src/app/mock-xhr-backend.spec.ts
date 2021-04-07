import { MockXhrBackend } from './mock-xhr-backend';

describe('MockXhrBackend', () => {
  it('should create an instance', () => {
    expect(new MockXhrBackend()).toBeTruthy();
  });
});
