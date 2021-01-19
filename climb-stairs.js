/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) return n;
  let oneStep = 1;
  let twoStep = 2;
  let i = 0;
  for (i = 3; i <= n; i++) {
    let a = oneStep + twoStep;
    oneStep = twoStep;
    twoStep = a;
  }
  return twoStep;
};
