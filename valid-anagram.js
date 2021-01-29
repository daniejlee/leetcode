/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length !== t.length){
    return false
  }

  if(s.length === 1){
    return (s===t)
  }

  let sSort = s.split('').sort()
  let tSort = t.split('').sort()
  for(let i = 0; i< sSort.length; i++){
    if(sSort[i] !== tSort[i]){
      return false;
    }
  }
  return true;


  // for (i = 0; i < s.length; i++) {
  //   if (t.includes(s[i])) {
  //     t = t.replace(s[i], '')
  //   }
  //   else {
  //     return false
  //   }
  // }
  // return true;

}
