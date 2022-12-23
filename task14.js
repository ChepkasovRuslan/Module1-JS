function calculate (a, b, operation) {
    let result = '';
    switch(operation) {
        case '+': {
            result = a + b;
            break;
        }
        case '-': {
            result = a - b;
            break;
        }
        case '*': {
            result = a * b;
            break;
        }
        case '/': {
            result = a / b;
            break;
        }
        case '%': {
            result = a % b;
            break;
        }
        default: {
            console.log('unknow operation');
        }
    }

    return result;
}

console.log(calculate(10, 10, '+'));
console.log(calculate(10, 10, '-'));
console.log(calculate(10, 10, '*'));
console.log(calculate(10, 10, '/'));
console.log(calculate(10, 10, '%'));
console.log(calculate(10, 10, 'a'));