/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if(n===1){
    return "1";
  }
  let num = "";
  let currentNumInSequence = "";
  let counter = 0;
  let previousNum = "1"

//OUTER LOOP TO INCREMENT UP TO 30
  for (let i = 0; i < n-1; i++) {

    //INNER LOOP COUNTING THE SEQUENCE
    for (let j = 0; j <= previousNum.length; j++) {
      if(j === 0) {
        currentNumInSequence = previousNum[j]
      }
      if (previousNum[j] !== currentNumInSequence) {
        num += counter;
        num += currentNumInSequence;
        currentNumInSequence = previousNum[j]
        counter = 1;
      }
      else{
        counter++;
      }
    }
    //end of inner loop
    previousNum = num
    num = ""
    counter = 0;
    currentNumInSequence = "";

  }
  //end of outer loop
  return previousNum;
}
