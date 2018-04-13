export const decimalToBinary = (decimal: number): string => {
    let result = '';
    let resultArray = [];
    while (decimal > 0) {
      let remainder = decimal % 2;
      decimal = (decimal - remainder) / 2;
      resultArray.unshift(remainder);
    }
    return (result = resultArray.toString().replace(/,/g, ''));
  };
  
  export const binaryToDecimal = (binary: string): number => {
    let result = parseInt(binary, 2);
  
    return result;
  };