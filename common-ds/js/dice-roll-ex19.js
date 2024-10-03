/***
 * 
Statement Exercise 19:
Create a function that simulates the throwing of two dice.

Examples:
diceRoll(); 
 */

const diceRoll = () => {
    
    let result = 0;

    result = Math.floor(Math.random() * 6 );
    return (result == 0) ? diceRoll() : result; // the number 0 it's not valid for a diceRoll game...
}

console.log(diceRoll());