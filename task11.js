const size = 10;

let table = [];
for(let i = 0; i < size; i++)
  table[i] = [];

for(let row = 0; row < size; row++) {
  for(col = 0; col < size; col++) {
    table[row][col] = row * col;
  }
}

console.table(table);
