function explain_callback(name, age, task){
    console.log('Hello ',name);
    console.log('your age ',age);
    task();
}

function washHand(){
    console.log('Wash hand with Soap');
}

function takeShawar(){
    console.log('Take Shawar');
}

explain_callback('Sagir', 19, washHand);
explain_callback('Kobir ', 14, takeShawar);