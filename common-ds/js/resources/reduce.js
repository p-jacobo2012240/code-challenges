
const people = [
    { name: 'Ollie Watkins', age: 28 },
    { name: 'Thomas Zimmerman', age: 43 },
    { name: 'Pablo J', age: 25 }
]

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