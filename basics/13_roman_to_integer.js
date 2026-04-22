// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
// Difficulty: Easy

/*
Roman numerals are represented by seven different symbols:

  Symbol  Value
  I       1
  V       5
  X       10
  L       50
  C       100
  D       500
  M       1000

Roman numerals are usually written largest to smallest from left to right.
However, subtraction is used in six cases:
  I before V (5) and X (10) → 4 and 9
  X before L (50) and C (100) → 40 and 90
  C before D (500) and M (1000) → 400 and 900

Given a roman numeral, convert it to an integer.

Example 1:
  Input: s = "III"
  Output: 3

Example 2:
  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V = 5, III = 3.

Example 3:
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90, IV = 4.

Constraints:
  1 <= s.length <= 15
  s contains only ('I', 'V', 'X', 'L', 'C', 'D', 'M')
  s is a valid roman numeral in the range [1, 3999].
*/

// Approach: If current symbol < next symbol, subtract; else add
var romanToInt = function (s) {
    let amap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (amap[s[i]] < amap[s[i + 1]]) {
            sum = sum + (amap[s[i + 1]] - amap[s[i]])
            i++
        } else {
            sum = sum + amap[s[i]]
        }
    }
    return sum
};
