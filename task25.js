const snakeString = 'find_and_replace_element_of_array';

const toCamelCase = str => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '_')  {
      result += str[i + 1].toUpperCase();
      i++;
    }
    else {
      result += str[i];
    }
  }

  return result;
}

console.log(toCamelCase(snakeString));