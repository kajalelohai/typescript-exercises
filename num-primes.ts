import  isprime  from './is-prime';
const numPrime = (num) => {
  let list = [];
  let count = 1;
  let startprime = 2;
  while (count <= num) {
    if (isprime(startprime) === true) {
      list.push(startprime);
      count++;
    }
    startprime++;
  }
  return list;
};

export default numPrime;