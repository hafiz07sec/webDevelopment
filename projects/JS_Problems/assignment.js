function kilometerToMeter(kilometer){
    return kilometer*1000;

}

function budgetCalculator(watch, mobile){
    return watch*50 + mobile*100;
}

function hotelCost(days){
    if (days<=20) {
        cost = days*100; 
    } 
    else{
        cost = (days-20)*50 + 20*100; 
    }

    return cost; 
}


var meter = kilometerToMeter(52.4);
var budget = budgetCalculator(3,2);
var totalCost = hotelCost(22);
var totalCost1 = hotelCost(15);
var totalCost2 = hotelCost(30);
console.log("Kilometer To Meter Converter:", meter); 
console.log("Total Budget:", budget); 
console.log("Total cost of 22 days: ", totalCost); 
console.log("Total cost of 15 days: ", totalCost1); 
console.log("Total cost of 30 days: ", totalCost2); 