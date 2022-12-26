const persons = [
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

const findMinMax = persons => {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].age > max) {
            max = persons[i].age;
        }
        if(persons[i].age < min) {
            min = persons[i].age;
        }
    }

    return {max: max, min: min};
}

const result = findMinMax(persons);

console.log(result);