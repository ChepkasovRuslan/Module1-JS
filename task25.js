const snakeString = 'find_and_replace_element_of_array';

const toCamelCase = str => {
  let result = str.split('_')
    .map(i => i[0].toUpperCase() + i.substring(1))
    .join('')

  return result[0].toLowerCase() + result.substring(1, result.length);
}

console.log(toCamelCase(snakeString));