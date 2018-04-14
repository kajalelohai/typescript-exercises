export const decimalToBinary = (decimal: number): string => {
  let result = '';
  let resultArray = [];
  while (decimal > 0) {
    let remainder = decimal % 2;
    decimal = (decimal - remainder) / 2;
    result = remainder + result;
  }
  return result;
};

export const binaryToDecimal = (binary: string): number => {
  let result = 0;
  let binaryArray = binary.split('').reverse();
  for (let i = 0; i < binaryArray.length; i++) {
    result += parseInt(binaryArray[i]) * Math.pow(2, i);
  }
  return result;
};
