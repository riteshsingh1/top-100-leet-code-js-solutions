/**
    Problem: https://leetcode.com/problems/two-sum/
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
 */

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * time complexity: O(n)
 * space complexity: O(n)
 * @param nums array of numbers
 * @param target number
 * @returns  array of two numbers that add up to target
 * check on codepen : https://codepen.io/1124ritesh/pen/QWoaVxp
 */
function twoSumJs(nums, target) {
    const map = new Map();
    // We are using a single loop that iterates through the array of numbers once.
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      // We are using a map to store the complement and the index of the number.
      //  map.has operation and map.set operation take constant time on average and O(n) in the worst case.
      if (map.has(complement)) {
        // map.get operation takes constant time.
        return [map.get(complement), i];
      }
      // map.set operation takes constant time.
      map.set(nums[i], i);
    }
    // If no solution is found, we return an empty array.
    return [];
  }
  
  console.log(twoSumJs([2, 7, 11, 15], 17));

  // check output - https://codepen.io/1124ritesh/pen/QWoaVxp
  