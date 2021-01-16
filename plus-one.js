/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arrayToString = digits.join();
  console.log(Number(arrayToString))
  let arrayToNum = Number(digits.toString())
  arrayToNum += 1;
  console.log(arrayToNum)
  return arrayToNum.toString(10).split('');
};


// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//   if(digits[0] === [9] && digits.length === 1){
//     return [1,0]
//   }
//   let lastIndex = digits.length - 1;
//   if(digits[lastIndex] === 9){
//     while(currentIndex != 9){
//       digits[lastIndex - 1] += 1
//       digits[lastIndex] = 0;
//     }
//   }
//   else {
//     digits[lastIndex] += 1;
//   }
//   return digits
// };
