/**
 * 
 * Statement Exercise 34:
Create a function to which I pass an array and it returns
an object with the grouped elements

Examples:
group([7.2, 5.3, 7.4], Math.floor)
// Returns: { 7: [7.2, 7.4], 5: [5.3] }

group(['one', 'two', 'three', 'four'], 'length')
// Returns: { 3: ['one', 'two', 'three'], 6: ['four'] }

group([{name: "victor", age: 33}, {name: "paco", age: 44}], 'age')
// Returns: { 33: [{age: 33}], 44: [{age: 44}] }

 *
 * 
 */

const group = (data, criteria) => {
    let result = {};

    data.forEach(elemet => {
        let propertie = typeof criteria == 'function' 
            ? criteria(elemet) : elemet[criteria];

            // build...

    });

    
    console.log(data. criteria);
};

// test case
console.log(group(['one', 'two', 'three', 'four'], 'length'));