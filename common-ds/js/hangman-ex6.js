/**
Statement Exercise 6:
Create the hangman game.
The user will have to guess and discover the letters of a word. 
secret, and will have 5 attempts (one attempt per limb of the human body).
 
Use the usual data entry method of your language,
In the case of JS, we will use the Prompt function.
 
Example:
hangmanGame('hackobo');  
 
//Exit:
Guess the letter: a
The word is: _a___
You have 5 attempts left 

 */
const prompt = require('prompt');
const dummyData = require('./resources/dummy-ex2');

let correctWord = [];
let secretQuestion =  [];

const getWord = async () => {

    const sortedDummyData = [...dummyData].sort();
    const randomIndex = Math.floor(Math.random() * sortedDummyData.length);
    correctWord = sortedDummyData[randomIndex].split('');
    secretQuestion = await replaceWord(correctWord);
    
    return correctWord;
}


const replaceWord = async(list) => {
    return list.map(() => '-' );
}


console.log('secret word ', replaceWord());

const main = async () => {
    
    await getWord();

    console.log('secret word ', await replaceWord());

    prompt.start();
    prompt.get(['Your guess'], (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Command-line input received:');
        console.log('  Your guess:', result['Your guess']);
    });
}

main();