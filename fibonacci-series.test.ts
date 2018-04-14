import { fibonacci } from './fibonacci-series';

describe('fibonacci', () => {
  test('returns fibonicci series upto 30', () => {
    const result = [0, 1, 1, 2, 3, 5, 8, 13, 21];

    expect(fibonacci(30)).toEqual(result);
  });

  test('returns fibonicci series upto 145', () => {
    const result = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

    expect(fibonacci(145)).toEqual(result);
  });
});
