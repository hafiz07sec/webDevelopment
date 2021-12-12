var fact=1;
function factorial(num){
    for (let i = 1; i <= num; i++) {
        fact = fact *i;


        
    }
    return fact; 
}

var result = factorial(6);
console.log(result); 