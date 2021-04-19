/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:

1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const answer = [];
  if (nums.length < 4) {
    return answer;
  }

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 3; i++) {
    while (i > 0 && nums[i] === nums[i - 1]) {
      i++;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      while (j > i + 1 && nums[j] === nums[j - 1]) {
        j++;
      }

      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          answer.push([nums[i], nums[j], nums[left], nums[right]]);
        }

        if (sum > target) {
          while (nums[right] === nums[--right]) {}
        } else {
          while (nums[left] === nums[++left]) {}
        }
      }
    }
  }

  return answer;
};
