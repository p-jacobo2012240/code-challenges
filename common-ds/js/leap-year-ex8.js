/**
 * 
Statement Exercise 8:
Given a current year, create a program that shows me 
the leap years that will occur in the next 30 years
 
Example:
leapYears(2024);
 
//Exit:
2024
2028
2032
2036
2040
2044
2048
2052
 
*/

const leapYears = (yearBase) => {

    const yearsRange = 30;

    while(counter < yearsRange) {

        const date = new Date(yearBase, 1, 29)
            .getMonth();
        
        if(date == 1) {
            console.log(counter);
        }

        counter++;
    }


}

console.log(leapYears(2023));