export const fibonacciSeries = (num: number): Array<number> => {
  let series = [1, 1];

  if (num <= 2) {
    return series;
  }

  while (series.length < num) {
    let sum = series[(series.length - 1)] + series[(series.length - 2)]
    series.push(sum);
  }

  return series;
};

export const nthFibonacci = (num: number): number => {
  const series = fibonacciSeries(num);
  const nthFib = series[num - 1];

  return nthFib;
};
