/**
 * 
Statement Exercise 22:
Create a function that reverses the order of a text
without using native language functions.

Examples:
invertText("Hello");

return: aloH
*/


const invertText = (text) => {

    const splitedWord = text.split('');
    let invertedWord = '';

    for(let i= (splitedWord.length -1); i >= 0; i--) {
        invertedWord += splitedWord[i];
    }

    return invertedWord;
}

// test casees
console.log(invertText("Hola"));
console.log(invertText("Hackobo"));