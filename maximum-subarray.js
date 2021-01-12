/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1){
    return nums[0]
  }
  let max = nums[0];
  let current = nums[0];
  for(let i = 1; i < nums.length; i++){

  if ((nums[i] + current) > max) {
      current += nums[i];
      max = current;
    }
    else if (nums[i] > max){
      max = nums[i];
      current = nums[i];
    }
    else {
      current += nums[i]
    }
  }

  return max;
};

// [1, 2]
