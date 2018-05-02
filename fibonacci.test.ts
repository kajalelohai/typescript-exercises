import { fibonacciSeries } from './fibonacci';
import { nthFibonacci } from './fibonacci';

describe('fibonacciSeries', () => {
  test('returns series of fibonacci till 5', () => {
    const series = [1, 1, 2, 3, 5];

    expect(fibonacciSeries(5)).toEqual(series);
  });
});

describe('nthFibonacci', () => {
  test('returns the 5th fibonacci number', () => {
    const num = 5;

    expect(nthFibonacci(5)).toBe(5);
  });
});

describe('nthFibonacci', () => {
  test('returns the 7th fibonacci number', () => {
    const num = 8;

    expect(nthFibonacci(7)).toBe(13);
  });
});
