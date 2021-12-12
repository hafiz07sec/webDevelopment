var inch,feet;



function inchToFeet(inch){
    feet = inch/12; 
    return feet; 
}
var mySelf = inchToFeet(68.64);
console.log(mySelf); 

var she = inchToFeet(64.7); 
console.log( she.toFixed(2));