import isPrime from './is-prime';

describe("isPrime", () => {
  test("returns false for 0", () => {
    expect(isPrime(0)).toBe(false);
  });

  test("returns true for -7", () => {
    expect(isPrime(-7)).toBe(false);
  });

  test("returns true for 7", () => {
    expect(isPrime(7)).toBe(true);
  });

  test("returns true for 11", () => {
    expect(isPrime(11)).toBe(true);
  });

  test("returns false for 12", () => {
    expect(isPrime(12)).toBe(false);
  });
});
