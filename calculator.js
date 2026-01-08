/*
  
    SIMPLE CALCULATOR CHALLENGE
  

  Instructions for Students:
  1. Ask the user to enter:
       - First number
       - Operator (+, -, *, /, %)
       - Second number
  2. Use if...else OR switch to perform the calculation
  3. Display the result in the console
  4. Check if the result is even or odd
  5. Add a loop so the calculator repeats until the user says "no" or cancels
  6. Write all the code yourself; do not copy from AI or other sources
  
*/

//  Step 1: Create a loop to repeat your calculator
// TODO: Start your loop (while, do...while, or for loop)

// Inside your loop:
// ------------------------------
let continueCalculating = true;

while (continueCalculating) {
    console.log("=== SIMPLE CALCULATOR ===");
    
    // Step 2: Ask the user for inputs
    // TODO: Get the first number
    let firstNumber;
    while (true) {
        const input = prompt("Enter the first number:");
        if (input === null) {
            console.log("Calculator cancelled.");
            continueCalculating = false;
            break;
        }
        
        firstNumber = parseFloat(input);
        if (!isNaN(firstNumber)) {
            break;
        }
        alert("Please enter a valid number!");
    }
    
    if (!continueCalculating) break;
    
//  Step 2: Ask the user for inputs
// TODO: Get the first number
// TODO: Get the operator (+, -, *, /, %)
// TODO: Get the second number
  let operator;
    while (true) {
        const input = prompt("Enter an operator (+, -, *, /, %):");
        if (input === null) {
            console.log("Calculator cancelled.");
            continueCalculating = false;
            break;
        }
        
        operator = input.trim();
        if (['+', '-', '*', '/', '%'].includes(operator)) {
            break;
        }
        alert("Please enter a valid operator (+, -, *, /, %)!");
    }
    
    if (!continueCalculating) break;
    
    // TODO: Get the second number
    let secondNumber;
    while (true) {
        const input = prompt("Enter the second number:");
        if (input === null) {
            console.log("Calculator cancelled.");
            continueCalculating = false;
            break;
        }
        
        secondNumber = parseFloat(input);
        if (!isNaN(secondNumber)) {
            break;
        }
        alert("Please enter a valid number!");
    }
    
    if (!continueCalculating) break;
    
//  Step 3: Perform calculation
// TODO: Use if...else OR switch to calculate the result
// TODO: Store the result in a variable
  let result;
    
    // Using the calculate function
    result = calculate(firstNumber, operator, secondNumber);
    
    // Alternative approach with switch directly in the loop:
  
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                result = 'Error: Division by zero';
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        case '%':
            if (secondNumber === 0) {
                result = 'Error: Modulo by zero';
            } else {
                result = firstNumber % secondNumber;
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }
//  Step 4: Display the result
// TODO: Log the result in the console
console.log(`\nCalculation: ${firstNumber} ${operator} ${secondNumber}`);
    
    if (typeof result === 'number' && !isNaN(result)) {
        console.log(`Result: ${result}`);
//  Step 5: Check if the result is even or odd
// TODO: Use the result to determine if it is even or odd and log it
  if (Number.isInteger(result)) {
            // Using the isEven function
            const evenOrOdd = isEven(result) ? 'even' : 'odd';
            console.log(`The result ${result} is ${evenOrOdd}.`);
            
            // Alternative approach without the function:
            /*
            if (result % 2 === 0) {
                console.log(`The result ${result} is even.`);
            } else {
                console.log(`The result ${result} is odd.`);
            }
            */
        } else {
            console.log(`The result ${result} is a decimal number.`);
        }
    } else {
        console.log(`Result: ${result}`);
    }
    
    console.log(""); // Empty line for better readability
//  Step 6: Ask the user if they want to calculate again
// TODO: Use confirm() or prompt() to repeat the loop
// If user says "no" or cancels, stop the loop
const continueResponse = confirm("Would you like to perform another calculation?");
    
    if (!continueResponse) {
        console.log("Thank you for using the calculator. Goodbye!");
        continueCalculating = false;
    }
}

//  Step 7: Optional functions for autograder
// TODO: Implement a function calculate(num1, operator, num2) that returns the result
// TODO: Implement a function isEven(num) that returns true if even, false if odd
function calculate(num1, operator, num2) {
    // TODO: Implement a function calculate(num1, operator, num2) that returns the result
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case '%':
            return num2 !== 0 ? num1 % num2 : 'Error: Modulo by zero';
        default:
            return 'Error: Invalid operator';
    }
}

function isEven(num) {
    // TODO: Implement a function isEven(num) that returns true if even, false if odd
    return num % 2 === 0;
}
//  Remember: Leave all TODOs for you to complete! No answers are given.
