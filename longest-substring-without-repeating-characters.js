/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStr = ""
  let maxLen = 0;
  for(let i = 0; i < s.length; i++){
    if(findDuplicate(subStr, s[i])){
      if(subStr.length > maxLen){
        maxLen = subStr.length;
      }
      i-=subStr.length-1;
      subStr = s[i];
    }
    else{
      subStr += s[i]
    }
  }
  if(subStr.length > maxLen && s.length > 0){
    return subStr.length;
  }
  return maxLen;
};

let findDuplicate = (subString, char) => {
  return subString.includes(char)
}
