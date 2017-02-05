// @flow

import half from '../src/index.js';

describe('Init test for testing system', () => {
  test('half', () => {
    expect(half(6)).toBe(3);
  });
}
