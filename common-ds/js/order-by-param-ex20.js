/**
 * 
Statement 20:
Create a function that sorts an array of objects based on the properties
that you pass as a parameter.

const users = [
{ name: 'Antonio', age: 20 },
{ name: 'Juan', age: 23 },
{ name: 'Pepe', age: 12 },
{ name: 'Raul', age: 28 },
{ name: 'Paco', age: 38 },
{ name: 'Jason', age: 56}
];

Examples:
sortObjects(users, "age");

*/

const users = require('../js/resources/dummy-ex20');

const sortObjects = (usersList, param) => {
    return usersList.sort((a, b) => {
        if(param == "age") {
            return a.age - b.age;
        } 

        return a.name - b.name;
    });
}

//test cases
console.log(sortObjects(users, "age"))
console.log('-------');
console.log(sortObjects(users, "name"))