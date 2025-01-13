/**
 * Problem:
 * Write a program that checks whether a given number is even or odd.
 *
 * Your task:
 * Implement the function `isEvenOrOdd` that takes a number and returns either "Even" or "Odd".
 *
 * Example:
 * isEvenOrOdd(4) should return "Even".
 * isEvenOrOdd(3) should return "Odd".
 */

// Write your solution here
function isEvenOrOdd(number) {

    if (number % 2 === 0) {
        return "even";

    }
        if (number % 2 !== 0) {
            return "odd";
        }
}

console.log(isEvenOrOdd(9));
console.log(isEvenOrOdd(568));

module.exports = isEvenOrOdd;
