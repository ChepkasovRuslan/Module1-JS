const persons = [
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

const sumPersonsAge = persons.reduce(
    (accumulator, object) => accumulator + object.age, 0
);

console.log(sumPersonsAge);