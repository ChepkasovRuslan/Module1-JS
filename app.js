let result = {};

const strings = ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', '', 'aaa'];

for (var i = 0; i < strings.length; i++) {
    result[strings[i]] = 1 + (result[strings[i]] || 0);
}

console.log(result);