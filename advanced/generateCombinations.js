/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
const generateCombinations = (array) => {
    const combinations = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <= array.length; j++) {
            combinations.push(array.slice(i, j));
        }
    }
    return combinations;
};

module.exports = generateCombinations;
