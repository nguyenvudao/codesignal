/*

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
each statue having an non-negative integer size. Since he likes to make things perfect,
he wants to arrange them from smallest to largest so that
each statue will be bigger than the previous one exactly by 1.
He may need some additional statues to be able to accomplish that.
Help him figure out the minimum number of additional statues needed.

*/

const makeArrayConsecutive = (arr) => {
  let count = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i += 1) {
    if (!arr.includes(i)) {
      count += 1;
    }
  }
  return count;
};
const arr = [5, 4, 6];
console.log(makeArrayConsecutive(arr));
// makeArrayConsecutive(arr);