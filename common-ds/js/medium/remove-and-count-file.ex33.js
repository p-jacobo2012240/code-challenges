/**
 * 
Statement Exercise 33:
Create a function to which you pass a string and convert it
to a list in an object that counts the number of elements.

Words must not include dashes or underscores.

Examples:
countElements("pc -computer _computer console- ps5 theLastOfUs computer");
 */

const countElements = (wordString) => {
    const wordList = wordString.split(" ");
    let mappingCounter = {};

    wordList.forEach(element => {
        element = element.replace(/[-_.,!]/g, "");

        if(mappingCounter[element]) {
            mappingCounter[element] ++;
        } else {
            mappingCounter[element] = 1;
        }
    });
    
    return mappingCounter;
}

//test case
console.log(countElements("pc -computer _computer console- ps5 theLastOfUs computer"));