/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = nums[nums.length-1];
  for(let i = nums.length; i >= 0; i--){
    if(nums[i]===current){
      nums.splice(i, 1)
    }
    else{
      current = nums[i];
    }
  }
};
