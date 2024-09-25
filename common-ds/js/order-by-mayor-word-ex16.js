/**
 * 
Statement Exercise 16:
Given an array of words, create a function that returns it sorted
by the length of its words from smallest to largest

Examples:
sortByLength([
"Hello",
"I am",
"Hackobo developer and CKAD",
"how",
"are you",
"today",
"friend",
"I",
"I am going",
"to",
"study JAVA and helm and openshift ",
"now"
]);

 */

const sortByLength = (words) => {
    return words.sort((prev, curr) => prev.length - curr.length );
}

console.log(sortByLength([
    "Hello",
    "I am",
    "Hackobo developer and CKAD",
    "how",
    "are you",
    "today",
    "friend",
    "I",
]));