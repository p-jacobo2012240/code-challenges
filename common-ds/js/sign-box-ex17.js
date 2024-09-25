/***
 * 
Statement Exercise 17:
Create a function that puts the phrase
that we pass as a parameter into an asterisk box

Examples:
showBoxText('Hello i'm Pablo and y love Java and TS');

**********
* Hello  *
* I'm    *
* Pablo  *
* and    *
* y      *
* love   *
* Java   *
* and    *
* TS     *
**********
 
 */

const showBoxText = (text) => { 
    const splitedWord = text.split(' ');

    const wordWithMaxlength = splitedWord.reduce((prev, curr) => { 
        if(curr.length > prev ) {
            return curr;
        }

        return prev;
    }, 0);

    for(let i = 0; i < (splitedWord.length + 2); i++ ) {
        if(i == 0 ) {
            console.log('*'.repeat(wordWithMaxlength.length));
        } 

        const spaces = ' '.repeat(wordWithMaxlength.length - splitedWord[i].length); // build the general spaces
        console.log(`* ${splitedWord[i]}${spaces} *`);     
    
        if (i == (splitedWord.length + 1)) {
            console.log('*'.repeat(wordWithMaxlength.length));
        }
    }
}

console.log(showBoxText("Hellooo, I'm Pablo and y love Java and TS"));