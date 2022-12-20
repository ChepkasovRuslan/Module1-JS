let numbers = [1, 2, 3, 4, 5, 6];

const isOdd = number => number % 2 == 0;

const multiplyByTwo = number => number * 2;

const filterAndOperate = (predicate, operation) => {
    numbers = Array.from(numbers).filter(predicate);
    console.log(numbers);
    
    numbers = numbers.map(operation);
    
    console.log(numbers);
}


filterAndOperate(isOdd, multiplyByTwo);