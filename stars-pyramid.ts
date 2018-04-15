let printStar = (lines: number): string => {
  let stars = '';

  for (let row = 1; row <= lines; row++) {
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

export default printStar;

/*
'     *\n    * *\n   * * *\n  * * * *\n * * * * *\n* * * * * *'


  4
  * * * * 
   * * *
    * *  
     *
  */
