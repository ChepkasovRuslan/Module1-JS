const snakeString = 'find_and_replace_element_of_array';

const toCamelCase = str => {
  let result = str;

  for (let i = 1; i < result.length; i++) {
    if(result[i] === '_')  {
      result = removeChar(result, i)
      result = result.substring(0, i) + result[i].toUpperCase() + result.substring(i + 1);
    }
  }

  return result;
}

function removeChar(str, char_pos) 
{
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  
  return part1 + part2;
}

console.log(toCamelCase(snakeString));