/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//双指针
function threeSumClosest(nums: number[], target: number): number {
  //第一步： 排序
  nums.sort((a, b) => {
    return a - b;
  });
  let answer = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(answer - target);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let tmpAns = nums[i] + nums[left] + nums[right];
      let tmpDiff = Math.abs(tmpAns - target);
      if (tmpDiff < diff) {
        diff = tmpDiff;
        answer = tmpAns;
      }
      if (tmpAns === target) {
        return answer;
      } else if (tmpAns < target) {
        while (nums[left] === nums[++left]) {}
      } else {
        while (nums[right] === nums[--right]) {}
      }
    }
  }
  return answer;
}
