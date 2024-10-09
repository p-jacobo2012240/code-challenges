/**
 * 
Statement Exercise 23:
Create a function that I pass some numbers in an array to and decodes
the message taking into account that each letter has an assigned number.

The letters of the spanish alphabet from A to Z have a number
for example A is the number 1 and Z is the number 26

Examples:
decodeMessage([8, 15, 12, 1]);

Returns:
HOLA
 * **/

const decodeMessage = (numbers) => {
    
    let decodeWord = '';

    numbers.forEach(number => {
        let letter = String.fromCharCode(parseInt(number)+64);
        
        decodeWord += letter;     
    });

    return decodeWord;
}


//test cases
console.log(decodeMessage([8, 15, 12, 1])); // HOLA