/**
 * 
Statement Exercise 21: 
Create a function that receives a number and generates a matrix with the 
number of columns and rows that we have indicated as a parameter. 

Examples: generateMatrix(4);

Returns: [ 
    [ 1, 2, 3, 4 ], 
    [ 5, 6, 7, 8 ], 
    [ 9, 10, 11, 12 ], 
    [ 13, 14, 15, 16 ] 
]
 */

const generateMatrix = (number) => {

    let matrix = [];
    let accumulator = 1;

    for(let row = 0; row < number; row++) {
        matrix.push([]); // [[], [], [], []]
        for(let colum = 0; colum < number; colum++) {
            // idx [[], <--- 0  [], <--- 1 [], <--- 2 [] <--- 3 ]
            matrix[row].push(accumulator++); 
        }
    }

    return matrix;
}

//test cases
console.log(generateMatrix(4));
console.log('----------------');
console.log(generateMatrix(10));