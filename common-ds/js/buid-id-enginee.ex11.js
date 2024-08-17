/**

Statement Exercise 11:
Create a function that receives a DNI (8 numbers) and calculates the letter of the DNI
 
It is an easy mathematical process that is based on obtaining the 
remainder of the entire division of the DNI number and the number 23. 
And with the rest you get the letter, using it as a position or index
within a set of letters.
 
This would be the arrangement of letters:
const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T '];
 
Examples:
generateDNILetter("25439343");  // Result: 25439343D
 */

const generateDNILetter = (idNumber) => {

    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T '];

    idNumber = parseInt(idNumber);
    
    // eadge case 
    if(idNumber > 0 && idNumber < 99999999 ) {
        let candidateIdx = idNumber % 23;
        let validIdx = letters.at(candidateIdx);
        
        return idNumber + validIdx;
    } else {

        return `invalid idNumber${idNumber }`;
    }

    return typeof idNumber;
}

//Test case 
console.log(generateDNILetter("25439343"));