
/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const myStack = [];
  if (s.length === 1 || s.length === 0 || s.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < s.length; i += 1) {
      const topElement = myStack[myStack.length - 1];
      if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
        myStack.push(s[i]);
      } else if (s[i] === ")" && topElement === "(" && myStack.length !== 0) {
        myStack.pop();
      } else if (s[i] === "]" && topElement === "[" && myStack.length !== 0) {
        myStack.pop();
      } else if (s[i] === "}" && topElement === "{" && myStack.length !== 0) {
        myStack.pop();
      } else {
        return false;
      }
    }
  }
  return myStack.length === 0;
};

console.log(isValid("()[]{}"));
