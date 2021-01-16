/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arrayToNum = Number(digits.join(''))
  arrayToNum += 1;
  console.log(arrayToNum)
  // fix leading zeroes
  return arrayToNum.toString(10).split('');
};
