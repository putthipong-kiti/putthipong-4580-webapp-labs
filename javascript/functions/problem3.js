function calculator(num1, num2, callback) {
    return callback(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, subtract));
console.log(calculator(5, 3, multiply));
console.log(calculator(6, 3, divide));