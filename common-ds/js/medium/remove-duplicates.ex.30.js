/**
 * Statement 30:
 * Given an array of numbers, allow duplicate numbers
 * a maximum of 2 times and return the length of the array.
 *
 * Examples:
 * removeDuplicates([4, 4, 4, 2, 2, 3]); // 5
 * removeDuplicates([6, 6, 2, 2, 2, 3]); // 5
 * removeDuplicates([1, 2, 3, 4, 9, 9, 9, 9]); // 5
 * 
 */

const removeDuplicates = (nums) => {

    const counter = {};
    const MAX_ALLOWED_BY_COUNTER = 3;
    const STANDARD_VALUE = 2;

    for(const num of nums) {
        if(counter[num] ==  undefined) {
            counter[num] = 1;
        } else {
            counter[num]++;

            if(counter[num] >= MAX_ALLOWED_BY_COUNTER) {
                counter[num] = STANDARD_VALUE;
            }
        }        
    }

    return counter;
}

// test cases
console.log(removeDuplicates([4, 4, 4, 2, 2, 3]));  // 5
console.log( removeDuplicates([6, 6, 2, 2, 2, 3])) // 5