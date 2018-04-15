let pyramid = (num: number): string => {
  let stars = '';

  for (let row = 1; row < num; row++) {
    for (let column = 1; column <= row; column++) {
      stars += '* ';
    }
    stars += '\n';
  }

  for (let row = num; row >= 1; row--) {
    for (let column = 1; column <= row; column++) {
      stars += '* ';
    }
    stars += '\n';
  }

  return stars;
};

export default pyramid;
/*

  4
*
* *
* * *
* * * * 
* * *
* *
* 
  */
