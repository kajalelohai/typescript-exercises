import listPrime from './list-prime';

describe('listPrime', () => {
  test('returns the list of prime till 10', () => {
    const result = [2, 3, 5, 7];

    expect(listPrime(10)).toEqual(result);
  });

  test('returns the list of prime till 11', () => {
    const result = [2, 3, 5, 7, 11];

    expect(listPrime(11)).toEqual(result);
  });
});
