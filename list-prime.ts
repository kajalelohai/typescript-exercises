import isPrime  from './is-prime';

const listPrime = (num: number): Array<number> => {
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) === true) {
      result.push(i);
    }
  }
  return result;
};

export default listPrime;