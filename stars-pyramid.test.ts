import printStar from './stars-pyramid';

describe('printStar', () => {
  test('returns stars pyramid upto 5 lines', () => {
    const stars = "    * \n   * * \n  * * * \n * * * * \n* * * * * \n";
    expect(printStar(5)).toBe(stars);
  });

  test('returns stars pyramid upto 6 lines', () => {
    const stars = "     * \n    * * \n   * * * \n  * * * * \n * * * * * \n* * * * * * \n";
    expect(printStar(6)).toBe(stars);
  });
});
