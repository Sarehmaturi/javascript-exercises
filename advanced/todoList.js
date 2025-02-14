/**
 * Problem:
 * Write a program to manage a to-do list.
 * The program should support adding tasks, removing tasks, and displaying all tasks.
 *
 * Your task:
 * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
 *
 * Example:
 * addTask("Buy groceries") should add a new task.
 * removeTask("Buy groceries") should remove the task.
 * showTasks() should return a list of all current tasks.
 */

// Write your solution here

module.exports = { addTask, removeTask, showTasks };

let tasks = [];

beforeEach(() => {
    tasks = [];
});

const addTask = (task) => {
    tasks.push(task);
    return `Task added: ${task}`;
};

const removeTask = (task) => {tasks = tasks.filter((t) => t !== task);
};

const showTasks = () => (tasks.length > 0 ? tasks : "No tasks available!");

console.log(addTask("Buy groceries"));
console.log(addTask("Study JavaScript"));
console.log(showTasks());
console.log(removeTask("Buy groceries"));
console.log(showTasks());
console.log(removeTask("Exercise"));
