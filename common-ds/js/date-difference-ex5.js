/**
Exercise 4: Evaluate Reverse Polish Notation (RPN)
Problem Statement: 

Example:
dayDifference('Dec 1, 2023', 'Dec 24, 2023');  // Output: 23 

 */

const dayDifference = (date1, date2) => {
    // Your code here
    date1 = ( date1 instanceof Date ) ? date1 : new Date(date1);
    date2 = (date2 instanceof Date) ? date2 : new Date(date2);

    const difference = Math.abs(date1.getTime() - date2.getTime());

    return (difference / (1000 * 60 * 60 * 24))
};

console.log(dayDifference('Dec 1, 2023', 'Dec 24, 2023'));