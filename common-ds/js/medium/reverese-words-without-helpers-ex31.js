/**
 * 
 * Statement Exercise 31:
 * Given some text, create a function that is capable of inverting
 * the order of his words for the order.
 * We cannot use native language functions.
 *
 * Examples:
 * invertWords("Hello, I'm Hackobo Engineer"); // Returns: Hackobo Engineer, I'm Hello
 * 
 */


const invertWords = (text) => {

    const splitedText = text.split('');

    for(let i = ( splitedText.length - 1) ; i >= 0; i--) {
        console.log('word ', splitedText[i]); 
    }

}

//test case
console.log("Hello, I'm Hackobo Engineer");