/*

Given a sequence of integers as an array,
determine whether it is possible to obtain a strictly increasing sequence by removing no more than
one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing
if a0 < a1 < ... < an. Sequence containing only one element is also
considered to be strictly increasing.

*/

function almostIncreasingSequence(sequence) {
  let found = false;
  for (let i = 0; i < sequence.length; i += 1) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i === 1 || i + 1 === sequence.length) {
        // Change eslint for this
        // eslint-disable-next-line no-continue
        continue;
      } else if (sequence[i] > sequence[i - 2]) {
        // eslint-disable-next-line no-param-reassign
        sequence[i - 1] = sequence[i - 2];
      } else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

const arr = [10, 1, 2, 3, 4, 5];
console.log(almostIncreasingSequence(arr));