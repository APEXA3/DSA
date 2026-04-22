// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Difficulty: Easy

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
  - Open brackets must be closed by the same type of brackets.
  - Open brackets must be closed in the correct order.
  - Every close bracket has a corresponding open bracket of the same type.

Example 1:
  Input: s = "()"
  Output: true

Example 2:
  Input: s = "()[]{}"
  Output: true

Example 3:
  Input: s = "(]"
  Output: false

Example 4:
  Input: s = "([])"
  Output: true

Example 5:
  Input: s = "([)]"
  Output: false

Constraints:
  1 <= s.length <= 10^4
  s consists of parentheses only '()[]{}'.
*/

// Approach: Stack — push open brackets, pop and match on close brackets
var isValid = function (s) {
    if (s.length == 1) {
        return false
    }
    let amap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    let astack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            astack.push(s[i])
        } else {
            if (astack.length === 0) return false
            let b = astack.pop()
            if (b !== amap[s[i]]) {
                return false
            }
        }
    }
    return astack.length === 0

};
