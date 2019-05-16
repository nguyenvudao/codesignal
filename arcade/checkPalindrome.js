/*

Given the string, check if it is a palindrome.

*/

const checkPalindrome = arr => arr === arr.split('').reverse().join('');
const ar = 'abac';
console.log(checkPalindrome(ar));