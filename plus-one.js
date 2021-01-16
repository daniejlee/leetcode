/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arrayToNum = Number(digits.join(''))
  console.log(arrayToNum)
  arrayToNum += 1;
  console.log(arrayToNum)
  return arrayToNum.toString(10).split('');
};
