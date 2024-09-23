
const people = [
    { name: 'Ollie Watkins', age: 28 },
    { name: 'Thomas Zimmerman', age: 43 },
    { name: 'Pablo J', age: 25 }
]

const cart = [
    { name: 'Laptop', quantity: 1, price: 999 },
    { name: 'Mouse', quantity: 2, price: 20 },
    { name: 'Keyboard', quantity: 1, price: 50 },
    { name: 'Monitor', quantity: 2, price: 200 }
];

const colors = ['red', 'blue', 'green', 'blue', 'yellow', 'blue', 'red'];


// the sum of ages
const sum = people.reduce((accumulator, current) => { 
    return accumulator + current.age;
}, 0);

console.log('sum of ages ', sum);


// return the most younger
const result = people.reduce((prev, current) => {
    if(prev.age < current) {
        return prev;
    }

    return current;
}, 0 );

// results...
console.log('results :: ', result);

// the initials 
const output = people.reduce((prev, current, idx, array) => {
    const split = current.name.split(" ");
    let initials = `${split[0][0]}${split[1][0]}`;

    if( idx == array.length - 1) {
        initials += '.';
    } else {
        initials += ', '
    }

    return prev + initials;
}, "")

// initials
console.log('initials ', output);


// total cost of items in the cart.
const totalItems = cart.reduce((prev, current) => {
    return prev + ( current.quantity * current.price);
}, 0);


console.log('total cart ', totalItems);


// counting specific color item
const findABlue = colors.reduce((prev, value) => {
    return (value == 'blue') ? prev + 1 : prev;
},0)

console.log('blue ' , findABlue );