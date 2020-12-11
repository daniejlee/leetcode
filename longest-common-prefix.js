/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let wordCount = strs.length;
  let common = "";
  let dupeCheck = true;

  if(strs.length === 0){
    return "";
  }
  for(let i = 0; i < strs[0].length && dupeCheck === true; i++){
    let letter = strs[0][i];

    for(let j = 1; j < wordCount; j++){
      if(letter !== strs[j][i]){
        dupeCheck = false;
      }
    }
    if(dupeCheck === true){
      common += letter;
    }
  }
  return common
}
