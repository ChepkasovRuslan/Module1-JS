const number = '88005553535';

const formatPhoneNumber = (str) => {
    str = new String(str);
    str = str.substring(1, 2) + ' (' + str.substring(1, 4) + ') ' +
        str.substring(4, 7) + '-' + str.substring(7, 9) + '-' +
        str.substring(9, 11);
    
    return str;
};

console.log(formatPhoneNumber(number));