var student = [90,97,60,45,93]; 
var max=0; 

for (let i = 0; i < student.length; i++) {
    if(student[i] > max)
    {
        max= student[i]; 
    }
    
}

console.log(max);