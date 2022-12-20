const user = {
    id: 123,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    password: 'MyPwd!23',
    age: 13
};

({password, ...restUser} = user);

console.log(restUser);