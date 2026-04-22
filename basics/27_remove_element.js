// 27. Remove Element
// https://leetcode.com/problems/remove-element/
// Difficulty: Easy

/*
Given an integer array nums and an integer val, remove all occurrences of val
in nums in-place. The order of the elements may be changed. Then return the
number of elements in nums which are not equal to val.

Example 1:
  Input: nums = [3,2,2,3], val = 3
  Output: 2, nums = [2,2,_,_]

Example 2:
  Input: nums = [0,1,2,2,3,0,4,2], val = 2
  Output: 5, nums = [0,1,4,0,3,_,_,_]

Constraints:
  0 <= nums.length <= 100
  0 <= nums[i] <= 50
  0 <= val <= 100
*/

// Approach: Two pointers — overwrite non-val elements from the front
var removeElement = function (nums, val) {
    //nums = [3,2,2,3], val = 3
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
