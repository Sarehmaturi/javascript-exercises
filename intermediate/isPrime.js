/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here
const isPrime = n => n > 1 && [...Array(Math.floor(Math.sqrt(n) - 1)).keys()].every(i => n % (i + 2) !== 0);

module.exports = isPrime;
