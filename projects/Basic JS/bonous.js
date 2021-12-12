var marks = [89, 97, 89, 68, 94];
var count=0,b=0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 80) {
        count++;
    }
    else
       b++; 
    
}
console.log("A+:",count);
console.log("Not A+:",b);