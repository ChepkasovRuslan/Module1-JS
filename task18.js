const fullname = 'Иванов Пётр Андреевич';

const names = fullname.split(' ');

let fullnameObj = {
    first_name: names[1],
    last_name: names[0],
    patronymic_name: names[2]
};

console.log(fullnameObj);