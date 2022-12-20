const concatenate = (arr, ...params) => Array.from(arr).concat(params);

console.log(concatenate([1, 2, 3], 4, 5));