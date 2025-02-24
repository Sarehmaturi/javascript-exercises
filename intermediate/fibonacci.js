/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
const fibonacci = n => {
    let array = [], a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        array.push(a);
        [a, b] = [b, a + b];
    }
    return array;
};
module.exports = fibonacci;
