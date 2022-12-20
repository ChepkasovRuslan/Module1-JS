const stringArr = ['str1', 'str2', 'str3', 'str4'];

const print = array => {
    let result = Array.from(array);
    let i = result.length;
    while (i != 0) {
        console.log(result.pop());
        i--;
    }
}

print(stringArr);