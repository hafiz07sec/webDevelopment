"use strict";
let age = 50;
let club = 'Barcelona';
const isFamous = false;
let famous;
console.log(club);
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Martin', 'Rock');
console.log(user);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);




