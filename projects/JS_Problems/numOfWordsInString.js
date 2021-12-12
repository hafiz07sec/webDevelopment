var speech = "My Name Is Hafiz.";
var count=0; 
for (let i = 0; i< speech.length; i++) {
    if (speech[i]== " ") {
        count++;
    }
}
console.log(count);