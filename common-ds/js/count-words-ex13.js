/**
 * 
Statement:
Create a program that counts the words in a text

Examples:
countWords("Saint Roque's dog does not have a tail
because he is a very very bad dog");

Returns:
{
the: 2,
dog: 2,
of: 1,
saint: 1,
roque: 1,
not: 1,
has: 1,
tail: 1,
because: 1,
is: 1,
a: 1,
very: 2,
bad: 1
}

*/ 

const countWords = (text) => {
    // creating array with the words
    const wordsList = text.toLowerCase().split(" ");

    // creare a ampty object with a counter
    let occurenciesWord = {};

    for(const keyWord of wordsList) {
        
        const countPerWord = wordsList.reduce((accumulator, element) => {
            return (element === keyWord) ? accumulator + 1 : accumulator;
        }, 0);

       occurenciesWord[keyWord] = countPerWord; 
    }

    return occurenciesWord;
}

// test cases
console.log(countWords("Saint Roque's dog does not have a tail because he is a very very bad dog"));
console.log(countWords("maybe the people have a super hero but the the the ... not words"));