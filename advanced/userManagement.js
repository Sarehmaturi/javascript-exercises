/**
 * Problem:
 * Write a simple user management system that allows adding and removing users,
 * and showing the list of users.
 *
 * Your task:
 * Implement the functions `addUser`, `removeUser`, and `showUsers` that
 * manage a list of users.
 *
 * Example:
 * addUser("Alice");
 * showUsers() should return ["Alice"].
 * removeUser("Alice");
 * showUsers() should return [].
 */

let users = new Set([]);

const addUser = (user) => users.has(user) ? false : users.add(user);
const removeUser = (user) => users.delete(user);
const showUsers = () => Array.from(users);

module.exports = { addUser, removeUser, showUsers };
