const numbers = [1, 2, 3, 4];

const isOdd = number => number % 2 == 0;

const multiplyByTwo = number => number * 2;

const filterAndOperate = (arr, predicate, operation) => {
    let result = Array.from(arr).filter(predicate);
    
    result = result.map(operation);
    
    console.log(result.join('\n'));
}


filterAndOperate(numbers, isOdd, multiplyByTwo);