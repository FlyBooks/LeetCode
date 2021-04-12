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
