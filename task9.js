const persons = [
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

const highestAge = persons.reduce((previous, current) => {
    return current.age > previous.age ? current : previous;
}).age;

const lowestAge = persons.reduce((previous, current) => {
    return current.age < previous.age ? current : previous;
}).age;

console.log({ min: lowestAge, max: highestAge });