const normalPerson ={
    firstName: 'Rahmi',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary= this.salary-amount;
        return this.salary;
    }
}

console.log(normalPerson.firstName);
normalPerson.chargeBill(100);
console.log(normalPerson.salary);