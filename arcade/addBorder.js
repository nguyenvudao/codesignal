/**
 *
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 *
 */

const addBorder = (arr) => {
  const arrLength = arr[0].length + 2;
  let outSide = '';

  for (let i = 0; i < arrLength; i++) {
    outSide = outSide.concat('*');
  }

  arr.unshift(outSide);
  arr.push(outSide);

  for (let i = 1; i < arr.length - 1; i++) {
    arr[i] = '*'.concat(arr[i], '*');
  }
  return arr;
};

const arr = ['abc',
  // eslint-disable-next-line indent
            'ded'];
console.log(addBorder(arr));