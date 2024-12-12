/**
 * 
 * Statement Exercise 36:
 * Create a program that finds the pairs of numbers that result
 * in a number that we pass to the function as a parameter.
 * 
 * 
 * Examples:
 * findPairsWithSum([1, 2, 3, 4], 5);
 * 
 * Returns:
 * [ [ 1, 4 ], [ 2, 3 ] ]
 * 
 */

const findPairsWithSum = (list, result ) => {
    const MIN_MATRIX = 2;
    let couples = [];

    if(Array.isArray(list) || list.length < MIN_MATRIX) {
        return false;
    }
    
    for(const currentNum of list) {
        for(const anotherNumber of list.slice(list.indexOf(currentNum) + 1)) {
           if(currentNum + anotherNumber == result) {
            couples.push([currentNum, anotherNumber]);
           } 
        }
    }

    return couples;
}

// test case
console.log(findPairsWithSum([1,2,3,4,5,6,7,8,9], 12));
console.log(findPairsWithSum([1,2,3,4], 5));