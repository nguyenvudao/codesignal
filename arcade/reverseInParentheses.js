/*

Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.

*/

const reverseInParentheses = (str) => {
  while (true) {
    const findBracket = str.indexOf(')');
    if (findBracket === -1) {
      break;
    }
    const o = str.substring(0, findBracket).lastIndexOf('(');
    const start = str.substring(0, o);
    const middle = str.substring(o + 1, findBracket).split('').reverse().join('');
    const end = str.substring(findBracket + 1, str.length);

    str = start + middle + end;
  }
  return str;
};

const str = 'foo(bar(baz))blim';
console.log(reverseInParentheses(str));