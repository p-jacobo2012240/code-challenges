/**
* 
*
Statement 27:
Create a function to which we pass a phrase and a word,
and check if the word exists in the phrase. Case insensitive.

Examples:
searchWord('Hello how are you', 'Hello') // Returns: true 

*/

const searchWord = (phrase, word) => {
    return phrase.includes(word);
}

//test case
console.log(searchWord('till all are one...', 'one'));
console.log(searchWord('joe will come in a skillfull software engineer', 'engineer'));