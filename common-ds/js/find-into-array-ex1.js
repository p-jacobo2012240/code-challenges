/*
Statement Exercise 1:
Given an array or a Marvel superhero object, make a program that can
show information about a superhero.
 
And it adds the ability to search for information on several superheroes at once.
 
Example:
showSuperheroInformation('Iron Man');
 
ouputt:
Real name: Tony Stark
Powers: Advanced technology, Air mobility
Team: The Avengers
 
Example 2: 
showSuperheroInformation([array of names]]);
 
output:
Shows the information of all the superheroes
 
*/

const DataSuperHeroes = require('./resources/dummy-ex1');


const showSuperheroInformation = (statement) => {
    const isArray = Array.isArray(statement);

   for(const hero in DataSuperHeroes) {
        console.log(hero);
   }
   

}


// test 1 = calling by name
//showSuperheroInformation('Iron Man');

// test 2 = calling by arrays
showSuperheroInformation(['Iron Man', 'Hulk']);