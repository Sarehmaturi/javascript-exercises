/**
 * Problem:
 * Write a function that converts a temperature from Celsius to Fahrenheit.
 *
 * Your task:
 * Implement the function `celsiusToFahrenheit` that converts a given temperature in Celsius to Fahrenheit.
 *
 * Example:
 * celsiusToFahrenheit(0) should return 32.
 * celsiusToFahrenheit(100) should return 212.
 */

// Write your solution here
const celsiusToFahrenheit = (celsius) => (celsius * 1.8) + 32;

module.exports = celsiusToFahrenheit;
