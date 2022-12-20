const email = 'ivanov.oleg@pochta.com';

const nameAndDomain = email.split('@');

const emailObj = {
    username: nameAndDomain[0],
    domain: nameAndDomain[1],
};

console.log(emailObj);