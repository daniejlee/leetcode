/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let num = "";
  let currentNumInSequence;
  let counter = 0;
  let previousNum = "1211"
//OUTER LOOP TO INCREMENT UP TO 30
  // for (let i = 0; i < n; i++) {

    //INNER LOOP COUNTING THE SEQUENCE
    for (let j = 0; j <= previousNum.length; j++) {
      console.log(currentNumInSequence)
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
  //}
  return num;
}


//111221
