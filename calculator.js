function processCalculation() {
    const display = document.getElementById('display');
    let expression = display.value; // Get the input expression

    // Replace x with * and ÷ with /
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    // Call the function to manually calculate the result
    const result = calculate(expression);

    display.value = isNaN(result) ? 'ERROR' : result;
}

function calculate(expression) {
    // Split the expression into numbers and operators
    const operands = expression.split(/([+\-*/])/); // Split by operators
    let result = parseFloat(operands[0].trim()); // The first operand

    for (let i = 1; i < operands.length; i += 2) {
        const operator = operands[i].trim();
        const nextOperand = parseFloat(operands[i + 1].trim());

        // Perform the calculation based on the operator
        if (operator === '+') {
            result += nextOperand;
        } else if (operator === '-') {
            result -= nextOperand;
        } else if (operator === '*') {
            result *= nextOperand;
        } else if (operator === '/') {
            if (nextOperand !== 0) {
                result /= nextOperand;
            } else {
                return 'ERROR'; // Handle division by zero
            }
        }
    }

    return result; // Return the calculated result
}
