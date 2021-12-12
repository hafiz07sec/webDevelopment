function doSomething(params) {
    console.log(3333);
}

console.log(1222);
//setTimeout(doSomething, 1000);
setTimeout(function(){
    console.log('lazy and waiting')
}, 4000);

setTimeout(() => {
    console.log('See you later')
}, 8000);

setInterval(() => {
    console.log('Doing it')
}, 2000);

console.log(44444);