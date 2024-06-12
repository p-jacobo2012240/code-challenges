/**
Exercise 4: Evaluate Reverse Polish Notation (RPN)
Problem Statement:

Create a function that evaluates the value of an arithmetic expression in Reverse Polish Notation (RPN).
Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Note that division between two 
integers should truncate toward zero.

console.log(evalRPN(["2", "1", "+", "3", "*"]));         // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));        // Output: 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // Output: 22

*/

const evalRPN = (tokens) => {
    let numStack = [];

    for(const token of tokens) { 
        if(!isNaN(token)) {
            // ensured the type of value
            numStack.push(Number(token));
        } else {
            let result, a, b = 0;
            
            a = numStack.pop();
            b = numStack.pop();

            console.log(`part a = ${a} part b = ${b}`)

            switch(token) {
                case "+":
                    result = a + b;
                break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); //TEMP
                    break;
            }

            numStack.push(result);
        }
    }

    // removed the last reference.
    return numStack.pop();
}

//Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); 
console.log(evalRPN(["4", "13", "5", "/", "+"]));