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
 

const getWord = () => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);   
    return dummyData.sort().at(randomIndex);
}

prompt.start();


prompt.get([getWord()], (err, result) => {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.getWord());
  });

