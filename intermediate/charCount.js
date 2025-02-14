/**
 * Problem:
 * Write a function that counts the occurrences of a specific character in a given string.
 *
 * Your task:
 * Implement the function `charCount` that returns the number of times a given character appears in the string.
 *
 * Example:
 * charCount("hello", "l") should return 2.
 * charCount("world", "o") should return 1.
 */

// Write your solution here

const charCount = (word, letter) => word.split('').filter(char => char === letter).length;
module.exports = charCount;

console.log(charCount("hello", "l")); 
