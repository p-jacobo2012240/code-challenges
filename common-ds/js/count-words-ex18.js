/**
 * 
Statement Exercise 18:
Given an array of sentences, count the number of words it has

Examples:
countWords([
"Hello, I'm Hackobo",
"I like programming",
"And I'm a Sotware Engineer"
]);

Returns: 10
 */


const countWords = (words) => {
    
    let counter = 0;
    
    words.forEach((str) => {
        const splitedString = str.split(" ");

        splitedString.forEach(word => (word) ? counter++ : counter );
    })

    return `Returns: ${counter} `;
}

console.log(countWords([
    "Hello, I'm Hackobo",
    "And I'm a Sotware Engineer"
]));