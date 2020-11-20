/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  console.log(nums, target)
  let index1, index2;
  for(let i = 0; i < nums.length; i++){
    const index2Find = nums.findIndex((element, index) => index > i && element === (target - nums[i]))
    if(index2Find >= 0){
      index1 = i;
      index2 = index2Find;
      return [index1, index2]
    }
  }
};
