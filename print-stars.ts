const printStars = (num: number): string => {
  let result = '';

  for (let row = 1; row <= num; row++) {
    for (let column = 1; column <= row; column++) {
      result += '* ';
    }
    result += '\n';
  }

  return result;
};

export default printStars;
