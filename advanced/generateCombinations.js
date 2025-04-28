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


function generateCombinations(array) {
  let pushed_Array = [];
  function helper(start, current_combination) {
    if (current_combination.length > 0) {
      pushed_Array.push([...current_combination]);
    }
    for (let i = start; i < array.length; i++) {
      current_combination.push(array[i]);
      helper(i + 1, current_combination);
      current_combination.pop();
    }
  }
  helper(0, []);
  return pushed_Array.sort((a, b) => a.length - b.length);
}
module.exports = generateCombinations;

console.log(generateCombinations([1, 2, 3]));  
