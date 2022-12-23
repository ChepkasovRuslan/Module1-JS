const fullname = 'Иванов Пётр Андреевич';

const splitNames = fullname => {
    const names = [''];
    var j = 0;

    for (var i = 0; i < fullname.length; i++) {
        if (fullname.charAt(i) === ' ') {
            j++;
            names.push('');
        } else {
            names[j] += fullname.charAt(i);
        }
    }
    return names;
}

const names = splitNames(fullname);

const fullnameObj = {
    first_name: names[1],
    last_name: names[0],
    patronymic_name: names[2]
};

console.log(fullnameObj);