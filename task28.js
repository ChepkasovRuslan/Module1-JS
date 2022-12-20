const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'Mypwd!23',
    age: 13
};

const changed = {
    age: 15,
    password: 'new password'
};

const updateUser = (user, changedUser) => {
    let result = user;
    if(changedUser.id) result.id = changedUser.id;
    if(changedUser.first_name) result.first_name = changedUser.first_name;
    if(changedUser.last_name) result.last_name = changedUser.last_name;
    if(changedUser.password) result.password = changedUser.password;
    if(changedUser.age) result.age = changedUser.age;

    return result;
}

console.log(updateUser(user, changed));