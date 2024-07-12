/*
**
Statement Exercise 7:
Given a set of people with first and last names
create a function to sort the array by last name
in alphabetical order
 
Example:
sortByLastName([
    "Jacobo Pablo",
    "Antonio Albani",
    "Al Pacino",
    "monet claude",
    "Robert de Niro",
    "George RR Martin",
    "Sylvester Stallone"
]);

*/
const sortByLastName = (list) => {

    const lastNames = list
        .map((person) => person.split(" ")[1])
        .sort();

    const orderedList = lastNames.map((element) => {
        const completed = list
            .find(completeName => completeName.split(" ")[1] == element);

        return completed;
    });
    return orderedList;
}


//test-case
console.log(sortByLastName([
    "Pablo Jacobo",
    "Antonio Albani",
    "Al Pacino",
    "Claude Monet",
    "Robert de Niro",
    "George R.R.Martin",
    "Sylvester Stallone",
    "Tom Watkins"
]));