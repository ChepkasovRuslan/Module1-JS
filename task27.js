const multipleDimension = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const singleDimension = [].concat(...multipleDimension);

console.log(singleDimension);