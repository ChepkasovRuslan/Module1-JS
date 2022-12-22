const arr1 = ['a1', 'a2', 'a3'];
const arr2 = ['b1', 'b2', 'b3'];
const arr3 = ['c1', 'c2', 'c3'];

function concatenate(...arrays) {
    const result = [];
    for (let i = 0; i < arrays.length; i++) {
        result.push(...arrays[i])
    }
    return result;
}

console.log(concatenate(arr1, arr2, arr3, arr3)); 