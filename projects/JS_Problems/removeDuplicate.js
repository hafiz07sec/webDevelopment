var student = [90,97,90,60,45,93]; 
var unique=[]; 

for (let i = 0; i < student.length; i++) {
    var elemnts = student[i];
    var index = unique.indexOf(elemnts);

    if(index == -1){
        unique.push(elemnts);
    }
    
}

console.log(unique);