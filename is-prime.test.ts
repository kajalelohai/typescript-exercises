import isprime from './is-prime';

describe("isprime", () => {
  test("returns false for 0", () => {
    expect(isprime(0)).toBe(false);
  });

  test("returns true for -7", () => {
    expect(isprime(-7)).toBe(false);
  });

  test("returns true for 7", () => {
    expect(isprime(7)).toBe(true);
  });

  test("returns true for 11", () => {
    expect(isprime(11)).toBe(true);
  });

  test("returns false for 12", () => {
    expect(isprime(12)).toBe(false);
  });
});
