/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  if (nums.length < 3) {
    return triplets;
  }
  nums.sort((a, b) => {
    return a - b;
  });
  let i = 0,
    left = 1,
    right = nums.length - 1;

  while (i < nums.length - 2) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }

    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[right] + nums[left];
      if (sum == 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
      }
      //去重
      if (sum <= 0) {
        while (nums[left] === nums[++left]) {}
      } else {
        while (nums[right] === nums[--right]) {}
      }
    }
    i++;
  }

  return triplets;
};
