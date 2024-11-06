/**
 * 
 * Statement Exercise 32: Given a text, create a function that is capable of generating 
 * a new text that includes only words of 4 characters or more.
 * Examples: filteredPhrase("Hello, I'm Hackobo dev, it's cold today");
 * 
 * Returns: Hello Hackobo , it's cold 
 * 
 */

const filteredPhrase = (phrase) => {

    const MAX_WORD_SIZE = 4;

    return phrase
        .split(" ")
        .filter((word) => {
            if(!word.includes(',') && word.length >= MAX_WORD_SIZE ) {
                return word; // console.log(word)
            }
        });

}

//test cases
console.log(filteredPhrase("Hello, I'm Hackobo dev it's cold today"));

console.log(filteredPhrase(`It is a long established fact that a reader will be distracted 
    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
    is that it has a more-or-less normal distribution`
))