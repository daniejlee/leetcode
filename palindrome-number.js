/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0){
    return false
  }
  const numString = x.toString();
  let reverseNum = "";
  for(let i = numString.length - 1; i >= 0; i--){
    reverseNum += numString[i];
  }
  if(numString === reverseNum){
    return true;
  }
  else{
    return false;
  }
};
