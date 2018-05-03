/*[2,3,4,5,6,7] => 28;
- iterate over each digit 
- if digit is divisible then save its quotient
- inner loop to iterate from outside i+1 to the end
- multiply i with inner j 
    -if matches then we with return
    - else continue
*/

const numberMultiple = (
  num: number,
  multiples: Array<number>
): Array<number> => {
  let multiple = [];

  for (let i = 1; i <= multiples.length; i++) {
    for (let search = i + 1; search <= multiples.length; search++) {
      if ((multiples[i] * multiples[search]) === num) {
        multiple.push(multiples[i], multiples[search]);
      }
    }
  }

  return multiple;
};

export default numberMultiple;
