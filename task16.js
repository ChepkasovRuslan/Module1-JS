const number = '88005553535';

const formatPhoneNumber = str => {
    let result = str;
    result = result.substring(1, 2) + ' (' + result.substring(1, 4) + ') ' +
        result.substring(4, 7) + '-' + result.substring(7, 9) + '-' +
        result.substring(9, 11);
    
    return result;
};

console.log(formatPhoneNumber(number));