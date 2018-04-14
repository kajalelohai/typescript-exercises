export const fibonacci = (series: number): Array<number> => {
  let sum = 0;
  let add = 1;
  let result = [];
  let final = 0;
  
  while (sum < series) {
    final = sum + add; // 1 2
    result.push(sum); //0 1 1
    sum = add; // 1 1
    add = final; // 1 2
  }

  return result;
};
