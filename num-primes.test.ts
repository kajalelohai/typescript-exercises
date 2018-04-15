import numPrime from './num-primes';

describe('numPrime', () => {
  test('returns 5 prime numbers', () => {
    const result = [2, 3, 5, 7, 11];

    expect(numPrime(5)).toEqual(result);
  });

  test('returns 7 prime numbers', () => {
    const result = [2, 3, 5, 7, 11, 13, 17];

    expect(numPrime(7)).toEqual(result);
  });
});
