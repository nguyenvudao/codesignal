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

const str1 = 'ab';
const str2 = 'abcaabbefab';

console.log(str2.replace(str1, ''));