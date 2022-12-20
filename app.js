const input = [
    {a: 5, b: 3, c: 4}, 
    {a: 1, b: 3, c: 4},
    {a: 4, b: 7, c: 4},
    {a: 2, b: 2, c: 3}
];

const output = input.map(i => i.a + i.b + i.c);

console.log(output);