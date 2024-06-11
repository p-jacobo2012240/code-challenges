/**
Statement Exercise 2:
Given an absolute path to a file (from a linux or unix-based system)
create a function that simplifies it
 
Example:
simplifyPath("/home/");             // Output: /home
simplifyPath("/x/./y/../../z/");    // Output: /z
simplifyPath("/../");               // Exit: /
simplifyPath("/home//tests/");    // Output: /home/tests

Edge cases:
Handle cases where the stack is empty after processing (which means the simplified path should be /).
Ensure multiple consecutive slashes are treated as a single slash.

 */

const simplifyPath = (path)=> { 

    let stack = [];
    const splitPath = path.split('/');

    splitPath.filter(( part ) => {     
        if(part == "..") {
            stack.pop();
        } else if (part != '.' &&  part != "") {
            stack.push(part);
        }
    });

    return '/' + stack.join('/');
} 

// success all cases
console.log(simplifyPath("/home/"));
console.log(simplifyPath('/x/./y/../../z'));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//tests/"));

