/**
 * 
Statement 29:
Given an array of objects of movies from the 80s and 90s.

Create two functions:
- One that filters them by genre
- and another that filters them by decade in this format 80s or 90s

Array of objects to use:
 */

const movies = require("../resources/dummy-ex29")

const filterByCriteria = (moviesList, criteria) => {
  
    const isDecade =  /^\d/.test(criteria);
    
    if(isDecade) {

        const decade = parseInt(criteria);
        const startYear = decade * 10;
        const endYear = startYear + 9;

        return moviesList
            .filter(movie => movie.releaseYear >= startYear && movie.releaseYear <= endYear);
    } else {
        return moviesList
            .filter((movie) => movie.genre == criteria);
    }

}

//test cases
console.log(filterByCriteria(movies, "accion"));
console.log(filterByCriteria(movies, "80s"));
