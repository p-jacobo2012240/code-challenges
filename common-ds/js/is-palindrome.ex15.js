/**
Exercise 14: Given a text string, check if it is a palindrome or not. 
Do not use javascript functions, only control structures. Palindromes are words that read the same even when reversed.

For example: ana, bob, otto, allivessevilla 

Examples: 
isPalindrome("otto") // Returns: true 
isPalindrome("hackobo") // Returns: false

 */

const isPalindrome = (word) => {
    let charList = word.split('');
    let newOrderedList = '';

    for(let i = (charList.length - 1); i >= 0; i--) {
        newOrderedList += charList[i];
    }
    
    return (newOrderedList == word ) ? true : false;
}   

// test cases
console.log(isPalindrome("otto"));
console.log(isPalindrome("facil"));
console.log(isPalindrome('allivessevilla'));