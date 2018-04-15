import  isPrime  from './is-prime';
const numPrime = (num) => {
  let list = [];
  let count = 1;
  let startprime = 2;
  while (count <= num) {
    if (isPrime(startprime) === true) {
      list.push(startprime);
      count++;
    }
    startprime++;
  }
  return list;
};

export default numPrime;