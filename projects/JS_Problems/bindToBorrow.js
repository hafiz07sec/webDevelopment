const normalPerson ={
    firstName: 'Rahmi',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        this.salary= this.salary-amount - tax -tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,


}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 50000
}
// normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);

// heroBillCharge(1000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(250);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900);
// console.log(heroPerson.salary);


normalPerson.chargeBill.apply(heroPerson, [300, 30, 3]);
console.log(heroPerson.salary);