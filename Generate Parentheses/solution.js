/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of
 well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 
Constraints:
1 <= n <= 8
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let resultArray = [];

  function generateCombinationsWellFormedParentheses(
    currentString,
    openBracket,
    closeBracket,
    maximumPair
  ) {
    if (currentString.length == maximumPair * 2) {
      resultArray.push(currentString);
      return;
    }
    if (openBracket < maximumPair) {
      generateCombinationsWellFormedParentheses(
        currentString + "(",
        openBracket + 1,
        closeBracket,
        maximumPair
      );
    }
    if (closeBracket < openBracket) {
      generateCombinationsWellFormedParentheses(
        currentString + ")",
        openBracket,
        closeBracket + 1,
        maximumPair
      );
    }
  }
  generateCombinationsWellFormedParentheses("", 0, 0, n);
  return resultArray;
};

console.log(generateParenthesis(3));
