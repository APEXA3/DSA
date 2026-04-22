// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Difficulty: Easy

/*
Given two strings needle and haystack, return the index of the first occurrence
of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
  Input: haystack = "sadbutsad", needle = "sad"
  Output: 0
  Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.

Example 2:
  Input: haystack = "leetcode", needle = "leeto"
  Output: -1
  Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
  1 <= haystack.length, needle.length <= 10^4
  haystack and needle consist of only lowercase English characters.
*/

// Approach 1: Sliding window with substring match
var strStr = function (haystack, needle) {
    for (let i = 0; i < (haystack.length - needle.length) + 1; i++) {
        let j = 0
        if (haystack[i] === needle[j]) {
            if (needle === haystack.substring(i, needle.length + i)) {
                return i
            }
        }
    }
    return -1


    // // Approach 2: Built-in indexOf
    // return haystack.indexOf(needle);
};
