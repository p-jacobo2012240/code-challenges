/**
*
Statement Exercise 11: Create a function to which you pass an array of numbers and a number 
that will be the result of the sum of two of the values. 

Examples: 
    sumTwo([3, 7, 8, 2], 10) // [ 3, 7] (both add up to 10) 
    sumTwo([4, 5, 9, 1], 10) // [9, 1] 
    sumTwo([1, 2, 3, 4], 5) // [2, 3 ]  
 */

const sumTwo = (list, result) => {

    for(let i= 0; i < list.length; i++) {
        let firstNumber = list[i];
        let secondNumber = result - firstNumber;

        if(list.includes(secondNumber) && secondNumber != firstNumber) {
            return [firstNumber, secondNumber];
        }

    }
}

// test case
console.log(sumTwo([4, 5, 9, 1], 10)) // [9, 1] 
console.log(sumTwo([3, 7, 8, 2], 10)) // [ 3, 7]