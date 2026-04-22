// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
// Difficulty: Easy

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.

Constraints:
  1 <= strs.length <= 200
  
  0 <= strs[i].length <= 200
  strs[i] consists of only lowercase English letters if it is non-empty.
*/

// Approach: Sort array, compare only first and last string
var longestCommonPrefix = function (strs) {
    strs.sort()
    let lp = strs[0];
    let rp = strs[strs.length-1]
    let ans = ''
    for (let i = 0; i < lp.length; i++) {
        if(lp[i] == rp[i]){
            ans = ans + lp[i]
        } else {
            break
        }
    }
    return ans
};
