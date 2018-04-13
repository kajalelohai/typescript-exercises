import { decimalToBinary, binaryToDecimal } from './binary-conversion';

describe('decimalToBinary', () => {
  test('converts 19 to binary', () => {
    const result = '10011';

    expect(decimalToBinary(19)).toBe(result);
  });

  test('converts 1991212319 to binary', () => {
    const result = '1110110101011110111110100011111';

    expect(decimalToBinary(1991212319)).toBe(result);
  });
});

describe('binaryToDecimal', () => {
  test('correctly converts binary strings to decimal', () => {
    const binary19 = '10011';
    const binary1991212319 = '1110110101011110111110100011111';

    expect(binaryToDecimal(binary19)).toBe(19);
    expect(binaryToDecimal(binary1991212319)).toBe(1991212319);
  });
});
