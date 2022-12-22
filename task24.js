const PARAM1 = 'ASC';
const PARAM2 = 'DESC';
const PARAM3 = 'NOT SORT';

const nums = [4, 5, 2, 4, 1, 5, 3];

const sort = (arr, param) => {
    switch (param) {
        case PARAM1: return arr.sort();
        case PARAM2: return arr.sort().reverse();
        case PARAM3: return arr;
    }
}

console.log(sort(nums, PARAM1));