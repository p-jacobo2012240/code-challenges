/**
 * 
 * Exercise 37: Create two functions that check if given an array of numbers, 
 * all of them are even. 
 * One function using language methods and another using only control structures. 
 * Examples: 
 * 
 * allPairs([1, 2, 3, 4]); // false 
 * allPairs([2, 6, 8, 12]); // true
 * 
 */

const allPairs = (numbers) => {
    const PAIR_RULE = 2;
    const O_EXPECTED = 0;

    return numbers
        .every(num => num % PAIR_RULE == O_EXPECTED);
}

// test cases
console.log(allPairs([1, 7, 3, 4]));
console.log(allPairs([2, 150, 8, 24]));