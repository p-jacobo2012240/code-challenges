/**
Statement Exercise 8:
Create an algorithm to which you pass an integer
and I converted it to Roman numeral
 
Examples:
integerARoman(100)); // Result: C
integerARoman(345)); // Result: CCCXLV
 
*/

const integerToRoman = (number) => {

    let result = "";

    const NUMBER_MAPS = {
        100: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 
        90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 
        4: "IV", 1: "I"
    };

    const keys = Object.keys(NUMBER_MAPS)
        .map(Number).sort((a, b) => b - a);

    for(let i =0; i < keys.length; i++) {
        
        let currentDecimalNumber = keys[i];
        let currentRomanNumber = NUMBER_MAPS[currentDecimalNumber];
        
        while(number >= currentDecimalNumber) {
            result += currentRomanNumber;
            number -= currentDecimalNumber;
        }
        
        console.log('result', result )
        return result;
    }
}

//test case
console.log(integerToRoman(123));
console.log(integerToRoman(450));