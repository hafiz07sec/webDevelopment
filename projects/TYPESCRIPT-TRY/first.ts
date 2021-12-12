let age: number = 50; 
let club: string = 'Barcelona';

const isFamous: boolean = false; 
let famous: boolean; 

console.log(club);

function add(num1: number , num2: number ){
        return num1 + num2;
}

add(3,2); 


function fullName (firstName:string , lastName: string): string{
    return firstName + ' ' + lastName; 
}

const user = fullName('Martin', 'Rock'); 
console.log(user); 

function doubleItAndConsole(num: number):void{
    const result = num *2;
    console.log(result); 
}

const output = doubleItAndConsole(10); 
console.log('output', output); 


let multiply2: (x: number, y:number)=> number; 

multiply2 = (x, y) => x * y; 

const multiply = (x: number, y: number): number => x * y; 

console.log(multiply(25,4)); 


const numbers: number[] = [1 ,2, 3, 4];
numbers.push(30); 

const friends: string[] = ['Rahim', 'Karim', 'Jobbar', 'Akash'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend; 
    }
}
console.log(megaName); 

//object

let friend:{
    name: string;
    age:number;
}

 friend ={
    name: ' Samuel David',
    age: 61


}
friend.age = 57; 

interface Player{
    club: string;
    name: string;
    salary: number;
    wife?: string;
    isPlaying: boolean; 
}

const messi: Player = {
    name: 'L. Messi',
    club: 'PSG',
    salary: 1000000,
    wife: 'Requizze',
    isPlaying: true
}

const ronaldo: Player ={
    name: 'C. Ronaldo',
    club: 'MU',
    salary: 500000,
    isPlaying: true
}

function getBonus (player: Player){
    return player.salary * 0.1; 
}

getBonus(messi); 


class Person {
    name: string; 
    private _partner: string; 
    readonly fatherName: string; 
    constructor(name: string, fatherName: string) {
        this.name = name; 
        this._partner = name; 
        this.fatherName = fatherName; 
    }

    getName(): string{
        return this.name; 
    }
}

const sam = new Person('Samuel','Eto');

console.log('name: ', sam.name, sam.fatherName); 

const samName = sam.getName(); 
