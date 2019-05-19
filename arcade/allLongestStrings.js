/**
 *
 * Given an array of strings, return another array containing all of its longest strings.
 *
 */

const allLongestStrings = (arr) => {
  //   arr.sort((a, b) => b.length - a.length);
  //   const maxLength = arr[0].length;
  //   return arr.filter(findMax => findMax.length >= maxLength);
  const maxSize = Math.max(...arr.map(x => x.length));
  return arr.filter(x => x.length === maxSize);
};

const arr = ['abc', 'eeee', 'abcd', 'dcd'];

console.log(allLongestStrings(arr));