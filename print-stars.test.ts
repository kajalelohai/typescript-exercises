import printStars from './print-stars';

describe('printStars', () => {
  test('returns the stars with increment in each line upto 7', () => {
    const stars = '* \n* * \n* * * \n* * * * \n* * * * * \n* * * * * * \n* * * * * * * \n';

    expect(printStars(7)).toBe(stars);
  });
});
