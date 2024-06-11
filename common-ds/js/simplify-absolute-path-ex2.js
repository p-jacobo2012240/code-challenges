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

    stack = splitPath.map(( part, idx ) => {     
        if(part === "..") {
            stack.pop();
        } else if ( part != '.' && part != "" ) {
            stack.push(part);
        }

        return stack;
    });


    return '/' + stack.join('/');
} 

// test 1 = get and simplify
console.log('TEST1', simplifyPath('/x/./y/../../z'));

// test 2 = get a two //
console.log('TEST 2', simplifyPath("/home//tests/"));

