const value =  ['str', 123, '123', true, null, {}, 2];

const determineType = value => {
    let result = '';
    switch(typeof(value)) {
        case 'string': {
            result = value + ' - строка'; 
            break;
        }
        case 'number': {
            result = value + ' - число';
            break;
        }
        case 'boolean':{
            result = value + ' - булевое значение';
            break;
        } 
        default: {
            result = value + ' - неизвестное значение';
        } 
    }
    return result;
}

const printTypes = value.forEach(i => console.log(determineType(i)));