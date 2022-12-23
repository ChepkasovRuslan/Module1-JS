const persons = [
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

const highestAge = persons => {
    let max = 0;
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].age > max) {
            max = persons[i].age;
        }
    }

    return max;
}

const lowestAge = persons => {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < persons.length; i++) {
        if(persons[i].age < min) {
            min = persons[i].age;
        }
    }

    return min;
}

console.log({ min: lowestAge(persons), max: highestAge(persons) });