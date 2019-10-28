// const findSecondLargest = (arr) => {
//   let highest = arr[0];
//   let secondHighest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       secondHighest = highest;
//       highest = arr[i];
//     }
//     if (arr[i] < highest && arr[i] > secondHighest) {
//       secondHighest = arr[i];
//     }
//   }
//   return secondHighest;
// };

// const arr = [5, 5, 2, 4, 8, 7, 6, 8];
// // console.log(Math.max(...arr));
// console.log(findSecondLargest(arr));


function maxMoves(s, t) {
  // Write your code here
  let count = 0;
  while (true) {
    if (!s.includes(t)) break;
    count++;
    console.log(count);
  }
  return count;
}

const b = 'a';
const a = 'a';
// const c = b.substring(a.indexOf(a));
// console.log(c);
console.log(maxMoves(a, b));
