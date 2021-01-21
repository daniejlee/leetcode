/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStr = ""
  let maxLen = 0;
  for(let i = 0; i < s.length; i++){
    console.log(i, "maxlen: ", maxLen)
    if(findDuplicate(subStr, s[i])){
      if(subStr.length > maxLen){
        maxLen = subStr.length;
      }
      subStr = "";
    }
    else{
      subStr += s[i]
    }
    //need case if no duplicates
  }
  if(maxLen === 0 && s.length > 0){
    return s.length;
  }
  return maxLen;
};

let findDuplicate = (subString, char) => {
  console.log("subString: ",subString, "char: ", char)
  return subString.includes(char)
}
