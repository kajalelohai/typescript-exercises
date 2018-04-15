import printStars from './inverted-star-pyramid';

describe('printStars', () => {
  test('returns the inverted pyramid of 4 lines', () => {
    const pyramid = '* * * * \n * * * \n  * * \n   * \n';
    expect(printStars(4)).toBe(pyramid);
  });
});
