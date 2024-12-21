/**
 * 
 * Statement Exercise 38: 
 * Create a function that converts a number to binary. 
 * 
 * Examples: 
 * 
 * toBinary(10) // 1010 
 * toBinary(76) // 1001100
 */

const toBinary = (number) => {
    let result = '';

    while(number) {
        result = (number % 2) + result;
        number = Math.floor(number / 2);
    }

    return parseInt(result);
}

// test cases
console.log(toBinary(100));
console.log(toBinary(124));