/**
Statement Exercise 8:
Create an algorithm to which you pass an integer
and I converted it to Roman numeral
 
Examples:
integerARoman(100)); // Result: C
integerARoman(345)); // Result: CCCXLV
 
*/




const integerARoman = (number) => {

    const NUMBER_MAPS = {
        100: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 
        90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 
        4: "IV", 1: "I"
    };

    for(let i =0; i < Object(NUMBER_MAPS).length; i++) {

        console.log('results',  Object.keys(NUMBER_MAPS)[i] )
    }
}

//test case
integerARoman(345);