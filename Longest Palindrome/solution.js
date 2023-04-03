/*
409. Longest Palindrome
Easy
4.5K
281
Companies
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1

Explanation: The longest palindrome that can be built is "a", whose length is 1.
 
Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   const map = {};
  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }
  let count = 0;
  Object.keys(map).forEach((key) => {
    if (map[key] % 2 === 0) {
      count += map[key];
    } else {
      count += map[key] - 1;
    }
  });
  return count < s.length ? count + 1 : count; 
};

