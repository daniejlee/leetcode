/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let max = nums[0];
  let subArr = nums[0];
  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > subArr) {
      if (subArr > 0) {
        subArr += nums[i]
      }
      else {
        subArr = nums[i];
      }
    }
    else if ((nums[i] + subArr) > max) {
      subArr += nums[i];
      max = subArr;
    }
    else {
      subArr += nums[i]
    }

    //set new max
    if (subArr > max) {
      max = subArr;
    }
  }

  return max;
};
