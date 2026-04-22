// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy

/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates
in-place such that each unique element appears only once. The relative order of
the elements should be kept the same. Return the number of unique elements k.

Example 1:
  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]

Example 2:
  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

Constraints:
  1 <= nums.length <= 3 * 10^4
  -100 <= nums[i] <= 100
  nums is sorted in non-decreasing order.
*/

// Approach 1: Two pointers
var removeDuplicates = function (nums) {

    // using two pointer
    if (nums.length === 0) return 0;
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k


    // // Approach 2: Using Set
    // let k = 0
    // let aset = new Set()
    // for (let i = 0; i < nums.length; i++) {
    //     if (aset.has(nums[i])) {
    //         continue
    //     } else {
    //         aset.add(nums[i])
    //         nums[k] = nums[i]
    //         k++
    //     }
    // }
    // return k
};
