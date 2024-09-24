/**
 * 
Statement Exercise 14:
Create a function that calculates the area of ​​a square, rectangle or triangle

Examples:
calculatePolygonArea({ type: 'triangle', base: 6, height: 9 });
 */


const calculatePolygonArea = (polygon) => {
    // triangle = ( b * h)  / 2 ;  square = l^2 ; rectangle = b * h
    const { height, base, type } = polygon;
    let result = 0;
    
    if( type == 'square') {
        result = height * height; 
    } else if ( type == 'triangle' && height && base ) {
        result = ( base * height ) / 2;
    } else if ( type == 'rectangle' && height && base ) {
        result = base * height;
    }

    return result;
}


console.log(calculatePolygonArea({type: 'triangle', base: 6, height: 9 }));
console.log(calculatePolygonArea({type: 'square', height: 6 }));
console.log(calculatePolygonArea({type: 'rectangle', base: 6, height: 9 }));
