const array = [5, 10, 15, 20, 10, 25, 20, 30, 15];
const number = 55;

let calculate = (array, number) => {
    array = Array.from(array);
    let sum = 0;
    let i = 0;
    do {
        sum += array[i];
        i++;
    } while (sum <= number);

    return sum;
}

console.log(calculate(array, number));