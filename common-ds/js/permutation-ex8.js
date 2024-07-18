/**
Statement Exercise 8:
Given an array of integers, detect whether that list
of numbers is a permutation from 1 to the last number in the array.
 
In this case a permutation is a sequence of numbers
in order without any missing among them.
 
Return the largest missing number.
 
The set may come unordered.
 
Examples:
permutation([1, 2, 3, 4, 5]) // Returns: 5
permutation([1, 2, 3, 5])) // Returns: 4


*/


const permutation = (list) => {

    let missingMaxNumbers = [];
    const orderList = list.sort((a, b) => a - b );

    for(let i = 0; i < orderList.length; i++) {
        if(orderList[i + 1] != (orderList[i] + 1) ) {
            missingMaxNumbers.push((i + 1));
        }
    }

    missingMaxNumbers.pop();
    return missingMaxNumbers[missingMaxNumbers.length - 1];
}


// TEST CASE
console.log(permutation([1, 2, 3, 4, 5,6]));
// console.log(permutation([1, 2, 3, 5]));