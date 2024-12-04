/**
 * 
 * Exercise 35:
 * Create a program that, given two arrays of frontend and backend languages
 * and given a parameter that will be an array with the names of two languages
 * tells us if they are compatible or not.
 * 
 * Only front-end languages ​​can be compatible with one back-end language
 * Examples:
 * areCompatibles("HTML", "PHP") // true
 * areCompatibles("PHP", "PYTHON") // false
 *
 *
 */


const areCompatibles = (language1, language2) => {

    const frontLangs = ['HTML', 'Javascript', 'HTML5', 'CSS', 'CSS3'];
    const backendLang = ['Java', 'PHP', 'C#', 'RUST', 'RUBY', 'GO' ];

    /**
     * only for string params not arrays
     */
   if(frontLangs.includes(language1) && backendLang.includes(language2) 
    || backendLang.includes(language1) && frontLangs.includes(language2)) {
        return true;
   } 

   return false;
}


// test cases
console.log(areCompatibles("Java", "GO"));
console.log(areCompatibles("Javascript", "PHP"));