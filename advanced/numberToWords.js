/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

module.exports = numberToWords;
const belowTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const thousands = ["", "thousand", "million", "billion"];

function numberToWords(num) {
    if (num === 0) return "zero";
    
    let result = "";
    let i = 0;
    
    while (num > 0) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    
    return result.trim();
}

function helper(num) {
    if (num === 0) return "";
    else if (num < 20) return belowTwenty[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return belowTwenty[Math.floor(num / 100)] + " hundred " + helper(num % 100);
}