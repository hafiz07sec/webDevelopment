class Person{
    constructor(firstName, lastName, salary){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Bala,', 25000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 30000);
console.log(friendlyPerson);

