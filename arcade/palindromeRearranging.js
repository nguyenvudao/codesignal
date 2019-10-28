/* Given a string, find out if its characters can be rearranged to form a palindrome.

 Example

 For inputString = "aabb", the output should be
 palindromeRearranging(inputString) = true.

 We can rearrange "aabb" to make "abba", which is a palindrome. */


const palindromeRearranging = (str) => {
  const hash = {};
  const arrChar = str.split('');
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line no-prototype-builtins
    if (!hash.hasOwnProperty(arrChar[i])) {
      hash[arrChar[i]] = 1;
    } else {
      hash[arrChar[i]]++;
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const value in hash) {
    if (hash[value] % 2 !== 0) {
      count++;
    }
  }
  return count < 2;
};

const str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc';
console.log(palindromeRearranging(str));