const calculate = (a, b, operation) => operation(a, b);

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log(calculate(10, 10, sum));
console.log(calculate(10, 10, subtract));