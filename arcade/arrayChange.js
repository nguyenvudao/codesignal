/**
 *
 * You are given an array of integers.
 * On each move you are allowed to increase exactly one of its element by one.
 * Find the minimal number of moves required to obtain a strictly increasing
 * sequence from the input.
 *
 */

function arrayChange(series) {
  let moves = 0;
  let diff = 0;
  for (let i = 1; i < series.length; i++) {
    if (series[i] <= series[i - 1]) {
      diff = series[i - 1] - series[i] + 1;
      series[i] += diff;
      moves += diff;
    }
  }

  return moves;
}

const series = [1, 1, 1];
console.log(arrayChange(series));