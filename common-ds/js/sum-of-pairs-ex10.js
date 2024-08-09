/**
Statement Exercise 10:
Create a function that receives an array of numbers and calculates
the sum of all the even numbers in the array

Examples:
sumPair([2, 13, 6, 15]); // Result: 8 
 */

const sumPair = (nums) => {

    let total = 0;

    for(const num of nums) {
        if(num % 2 == 0 ) {
            total += num;
        }
    }

    return total;
};

//test case
console.log(sumPair([2, 13, 6, 15]));
console.log(sumPair([101, 12, 6, 3, 25]));

