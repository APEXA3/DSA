// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Difficulty: Medium

/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.

Constraints:
  0 <= s.length <= 5 * 10^4
  s consists of English letters, digits, symbols and spaces.
*/

// Approach: Sliding window with HashMap
var lengthOfLongestSubstring = function (s) {
  let amap = new Map();
  let lp = 0;
  let maxval = 0;
  let dum = 0
  for (let i = 0; i < s.length; i++) {
      if (amap.has(s[i])) {
          lp = Math.max(lp, amap.get(s[i]) + 1);
          dum = i - lp + 1;
          maxval = Math.max(maxval, dum);
          amap.set(s[i], i)
      } else {
          amap.set(s[i], i)
          dum = i - lp + 1
          if (dum > maxval) {
              maxval = dum
          }
      }
  }
  return maxval

  // // ====================remove redundancy
  // let amap = new Map();
  // let lp = 0;
  // let maxval = 0;
  // for (let i = 0; i < s.length; i++) {
  //     if (amap.has(s[i])) {
  //         lp = Math.max(lp, amap.get(s[i]) + 1);
  //     }
  //     amap.set(s[i], i);
  //     let dum = i - lp + 1;
  //     maxval = Math.max(maxval, dum);
  // }
  // return maxval;

  // // =================with while
  // let amap = new Map();
  // let rp = 0, lp = 0
  // let maxval = 0, len = 0
  // while (rp < s.length) {
  //     if (amap.has(s[rp])) {
  //         lp = Math.max(amap.get(s[rp]), lp) + 1
  //     }
  //     amap.set(s[rp], rp)
  //     len = rp - lp + 1
  //     maxval = Math.max(maxval, len)
  //     rp++
  // }
  // return maxval
};
