/**
 *
 * Given two strings, find the number of common characters between them.
 *
 * For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 *
 */

const commonCharacterCount = (s1, s2) => {
  let count = 0;
  // eslint-disable-next-line no-param-reassign
  s1 = s1.split('');
  // eslint-disable-next-line no-param-reassign
  s2 = s2.split('');

  s1.forEach((common) => {
    if (s2.includes(common)) {
      count++;
      s2.splice(s2.indexOf(common), 1);
    }
  });

  return count;
};

const s1 = 'aabcc';
const s2 = 'adcaa';

console.log(commonCharacterCount(s1, s2));