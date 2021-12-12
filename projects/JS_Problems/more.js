
// 1 1 2 3 5 8 13 21 34
/** 
function fibonacci(num){
    var fibo=[1,1];

    for (let i = 2; i <num;  i++){
            var nextFibo = fibo[i-1]+ fibo[i-2];
            fibo.push(nextFibo);
    }
    return fibo;
}

var result = fibonacci(10);
console.log(result);
*/
function fibonacci(num){
    var a=1,b=1;

    for (let i = 2; i <num;  i++){
          var c = b; 
            b=a+b;
            a=c; 

    }
    return b;
}

var result = fibonacci(10);
console.log(result);