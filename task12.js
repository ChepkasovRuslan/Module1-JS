let table = new Array(101);
for(let i = 0; i < table.length; i++)
    table[i] = new Array(101);

for(let row = 0; row < table.length; row++) {
    for(col = 0; col < table[row].length; col++) {
        table[row] = row * row;
    }
}

console.table(table);