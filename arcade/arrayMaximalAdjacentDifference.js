/**
 *
 * Given an array of integers, find the maximal absolute difference between any
 * two of its adjacent elements.
 *
 */
const arrayMaximalAdjacentDifference = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > max) {
      max = Math.abs(arr[i] - arr[i + 1]);
    }
  }

  return max;
};
const arr = [-1, 4, 10, 3, -2];

console.log(arrayMaximalAdjacentDifference(arr));