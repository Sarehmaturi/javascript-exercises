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

module.exports = { addUser, removeUser, showUsers };

let users = [];
beforeEach(() => {
    users = []; 
});

const addUser = (user) => {
    users.push(user);
   // return `User added: ${user}`;
};

const removeUser = (user) => {
  users = users.filter((u) => {
    u !== user;
  });
};

const showUsers = () => (users.length > 0 ? users : "No users available!");

console.log(addUser("Alice"));
console.log(addUser("Sareh"));
console.log(showUsers());
console.log(removeUser("Alice"));
console.log(showUsers());
console.log(removeUser("Molly"));
