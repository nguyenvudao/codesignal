const qrcode = require('qrcode');
/*

Write a function that returns the sum of two numbers.

*/
const generateQRCode = async (text) => {
  const qrCode = await qrcode.toDataURL(text);
  return qrCode;
};

console.log(generateQRCode('tete'));
const add = (param1, param2) => param1 + param2;

console.log(add(10, 100));