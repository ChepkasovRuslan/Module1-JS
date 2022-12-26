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
  return {
    ...user,
    ...changedUser
  };
}

console.log(user);