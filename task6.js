const input = [
    { name: 'Ivan', age: 24 }, 
    { name: 'Oleg', age: 16}, 
    { name: 'Igor', age: 24}
];

const output = input.filter(person => person.age > 18)
    .map(person => person.name);

console.log(output);