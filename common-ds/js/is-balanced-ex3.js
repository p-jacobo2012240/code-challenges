/**
Exercise 3: Balanced Parentheses
Problem Statement:

Create a function that checks if a given string of parentheses is balanced. 
The string can contain the characters (, ), {, }, [ and ]. A string is considered balanced if: 

console.log(isBalanced("()"));           // Output: true
console.log(isBalanced("()[]{}"));       // Output: true
console.log(isBalanced("(]"));           // Output: false
console.log(isBalanced("([)]"));         // Output: false
console.log(isBalanced("{[]}"));         // Output: true
 */

const isBalanced = (expression) => {

    let stack = [];
    const splitPath = expression.split("");

    splitPath.filter(sing => {
        if(sing == "(" || sing == "[" || sing == "{" ) {
            stack.push(sing);
        }

        if(sing == ")" || sing == "]" || sing == "}" ) { 
            if(stack.includes("(") && sing == ")") {
                stack.pop();
            }

            if(stack.includes("[") && sing == "]") {
                stack.pop();
            }
            
            if(stack.includes("{") && sing == "}") {
                stack.pop();
            }   
        }
    });

    return  (stack.length == 0) ? true : false;
}

// successed all cases
console.log(isBalanced("()"));           
console.log(isBalanced("()[]{}"));       
console.log(isBalanced("(]"));           
console.log(isBalanced("([)]"));         
console.log(isBalanced("{[]}")); 