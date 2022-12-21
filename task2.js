const input = [14, 53, 23, 53, 13, 55, 7, 34, 3, 6];

const oddIndex = arr => arr.filter((_, index) => index % 2 == 0)

console.log(oddIndex(input));