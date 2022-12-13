// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Source:
// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(arr) {
  let numsMap = {};
  for (let i = 0; i < arr.length; i++) {
    let((numsMap = arr[i]));
    if (numsMap[num]) {
      return true;
    } else {
      numsMap[num] = true;
    }
  }
  return false;
}

// Alternative solution

// var containsDuplicate = function (nums) {
//   const map = {};
//   for (const num of nums) {
//     if (map[num]) return true;
//     map[num] = true;
//   }
//   return false;
// };
