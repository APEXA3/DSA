// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/
// Difficulty: Easy

/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
  Input: x = 121
  Output: true

Example 2:
  Input: x = -121
  Output: false

Example 3:
  Input: x = 10
  Output: false

Constraints:
  -2^31 <= x <= 2^31 - 1
*/

// Approach 1: Reverse full number and compare
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let rev = 0, real = x
    while (x > 0) {
        let rem = x % 10 // get last
        rev = rev * 10 + rem //shift left to add rem
        x = Math.floor(x / 10) //remove last
    }
    return rev == real

    // // Approach 2: Convert to string, reverse, compare
    // return x < 0 ? false : (x === +x.toString().split("").reverse().join(""));

    // // Approach 3: Reverse only half the number (optimal)
    // if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    // let rev = 0;
    // while (x > rev) {
    //     let rem = x % 10;
    //     rev = rev * 10 + rem;
    //     x = Math.floor(x / 10);
    // }
    // return x === rev || x === Math.floor(rev / 10);

    // // Approach 4: Two-pointer on string
    // let str = x.toString();
    // if (x < 0) return false
    // let left = 0, right = str.length - 1
    // while (left < right) {
    //     if (str[left] !== str[right]) return false
    //     left++
    //     right--
    // }
    // return true
};
