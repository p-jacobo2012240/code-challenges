/**
 * 
Exercise 19:
Given an array of users, show only those who are over 20 years old
and have the letters "o" and "n" in their name

const users = [
{ name: 'Antonio', age: 20 },
{ name: 'Juan', age: 23 },
{ name: 'Pepe', age: 12 },
{ name: 'Raul', age: 28 },
{ name: 'Paco', age: 38 },
{ name: 'Jason', age: 56}
];

Examples:
filterUsers(users);

Returns:
[
{ name: 'Antonio', age: 20 },
{ name: 'Jason', age: 56}
] 

 */

const filterUsers = (people) => {
    const MAX_AGE = 20;

    return people
        .filter((person) => person.age >= MAX_AGE)
        .filter((person) => person.name.includes('o') && person.name.includes('n'));
} 


// test case
console.log(filterUsers(
    [
        { name: 'Antonio', age: 20 },
        { name: 'Juan', age: 23 },
        { name: 'Pepe', age: 12 },
        { name: 'Raul', age: 28 },
        { name: 'Paco', age: 38 },
        { name: 'Jason', age: 56}
    ]
));