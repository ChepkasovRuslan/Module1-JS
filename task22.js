const numArray = [13, 14, 32, 23, 34, 21, 44, 47, 86];
const start = 4;
const end = 6;

const cut = (array, start, end) => array.slice(start, end + 1); 

console.log(cut(numArray, start, end));