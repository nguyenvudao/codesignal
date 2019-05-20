/*

Some people are standing in a row in a park.
There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights
in a non-descending order without moving the trees.
People can be very tall!

*/

const sortByHeight = (arr) => {
  const sort = arr.filter(h => h > 0).sort((a, b) => a - b);
  return arr.map((p) => {
    if (p !== -1) {
      return sort.shift();
    }
    return -1;
  });
};


const arr = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1];
console.log(sortByHeight(arr));