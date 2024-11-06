/**
 * 
 * Statement Exercise 31:
 * Given some text, create a function that is capable of inverting
 * the order of his words for the order.
 * We cannot use native language functions.
 *
 * Examples:
 * invertWords("Hello, I'm Hackobo Engineer"); // Returns:  Engineer Hackobo , I'm Hello
 * 
 */


const invertWords = (text) => {

    const splitedText = text.split(' ');
    let reverseWord = '';
     
    for(let i = ( splitedText.length - 1) ; i >= 0; i--) {
        reverseWord +=  `${splitedText[i]} `;
    }

    return reverseWord;
}

//test case
console.log(invertWords("Hello, I'm Hackobo Engineer"));