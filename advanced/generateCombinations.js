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

module.exports = generateCombinations;

function generateCombinations(nums) {
    const result = [];
    
    function backtrack(start, combination) {
        if (combination.length > 0) {
            result.push([...combination]);
        }
        
        for (let i = start; i < nums.length; i++) {
            combination.push(nums[i]);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}
