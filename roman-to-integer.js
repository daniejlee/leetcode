/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let intString = 0
  for (let i = 0; i < s.length; i++){
    if(s[i] === "I"){
      if(s[i+1] === "V"){
        intString += 4
        i++
      }
      else if(s[i+1] === "X"){
        intString += 9
        i++
      }
      else{
        intString += 1
      }
    }

    else if(s[i] === "V"){
      intString += 5;
    }

    else if(s[i] === "X"){
      if (s[i + 1] === "L") {
        intString += 40
        i++
      }
      else if (s[i + 1] === "C") {
        intString += 90
        i++
      }
      else {
        intString += 10
      }
    }

    else if(s[i] === "L"){
      intString += 50;
    }

    else if(s[i] === "C"){
      if (s[i + 1] === "D") {
        intString += 400
        i++
      }
      else if (s[i + 1] === "M") {
        intString += 900
        i++
      }
      else {
        intString += 100
      }
    }

    else if(s[i] === "D"){
      intString += 500;
    }

    else if(s[i] === "M"){
      intString += 1000;
    }
  }

  return intString
};
