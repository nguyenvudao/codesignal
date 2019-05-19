/*

Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product

*/

function adjacentElementsProduct(arr) {
  let max = arr[0] * arr[1];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] * arr[i + 1] > max) {
      max = arr[i] * arr[i + 1];
    }
  }
  return max;
}

const arr = [-1, 1, -1];
console.log(adjacentElementsProduct(arr));