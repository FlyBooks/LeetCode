/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length;
  const counter = {};
  const maxMark = { timer: 0 };
  for (let i = 0; i < n; i++) {
    if (nums[i] in counter) {
      counter[nums[i]]++;

      if (counter[nums[i]] > Math.floor(n / 2)) {
        return nums[i];
      }
    } else {
      counter[nums[i]] = 1;
    }

    if (counter[nums[i]] > maxMark.timer) {
      maxMark.timer = counter[nums[i]];
      maxMark.num = nums[i];
    }
  }

  return maxMark.num;
};
