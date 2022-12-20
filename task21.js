class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email
    }

    toString() {
        return `${this.lastName} ${this.firstName} E-mail: ${this.email}`
    }

    print() {
        console.log(this.toString());
    }
}

const user = new User('Ivan', 'Ivanov', 'ivanov@pochta.com');
user.print();