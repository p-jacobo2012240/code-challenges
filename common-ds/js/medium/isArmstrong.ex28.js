/**
* 
Statement Exercise 28:

Create a function that tells me if a number is an Armstrong number or not.

A number is an Armstrong number if the sum of the cubes of its digits is equal to the number.
For example, the number 371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371.

If the number has 4 digits, it is raised to 4, and if it has 5 digits, it is raised to 5.

Examples:
isArmstrong(371) // Returns: true
*/

const isArmstrong = (number) => {

    let accumulator = 0;
    const BASE_POW = 3;
    const parts = String(number).split('');

    for(const part of parts) {
        const num =  Math.pow(Number(part), BASE_POW);
        accumulator += num;
    }

    return ( accumulator == number ) 
        ? `the number ${number} is armstrong` 
        : `not is armstrong`;    
}

// test cases
console.log(isArmstrong(371));
console.log(isArmstrong(153));
console.log(isArmstrong(225));