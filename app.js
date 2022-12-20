const snakeString = 'find_and_replace_element_of_array';

const toCamelCase = str => str.split('_')
        .map(i => i[0].toUpperCase() + i.substring(1))
        .join('');

console.log(toCamelCase(snakeString));