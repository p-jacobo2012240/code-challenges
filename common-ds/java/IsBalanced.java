import java.util.Stack;

/***
Exercise 3: Balanced Parentheses
Problem Statement:

Create a function that checks if a given string of parentheses is balanced. 
The string can contain the characters (, ), {, }, [ and ]. A string is considered balanced if: 

System.out.println(isBalanced("()"));           // Output: true
System.out.println(isBalanced("()[]{}"));       // Output: true
System.out.println(isBalanced("(]"));           // Output: false
System.out.println(isBalanced("([)]"));         // Output: false
System.out.println(isBalanced("{[]}"));         // Output: true
 */

public class IsBalanced {

    public static void main(String[] args) {
        System.out.println(isBalanced("()"));  
    }

    public static Boolean isBalanced(String expression) {

        Stack<String> stack = new Stack<>();
        String[] splitedExpression = expression.split("");
        Boolean isValid = null;

        for(String ch : splitedExpression) {
            if(ch.equals("(") || ch.equals("[") || ch.equals("{")) {
                stack.add(ch);
            }

            if(ch.equals(")") || ch.equals("]") || ch.equals("}")) {
                if(stack.contains("(") && stack.contains(")")) {
                    stack.pop();
                }

                if(stack.contains("[") && stack.contains("]")) {
                    stack.pop();
                }

                if(stack.contains("{") && stack.contains("}")) {
                    stack.pop();
                }
            }
        }

        if(stack.size() == 0) {
            isValid = true;
        } else {
            isValid = false;
        }

        return isValid;
    }

}