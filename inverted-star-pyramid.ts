let printStars = (lines: number): string => {
  let stars = '';

  for (let row = lines; row >= 1; row--) {
    for (let space = lines - row; space > 0; space--) {
      stars += ' ';
    }

    for (let col = 1; col <= row; col++) {
      stars += '* ';
    }

    stars += '\n';
  }

  return stars;
};

export default printStars;
/*
  4
* * * *\n * * *\n  * *\n   *
  */
