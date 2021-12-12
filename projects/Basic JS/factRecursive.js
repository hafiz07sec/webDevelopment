

function factorial(num)
{
   
    if (num == 0)
    {
        return 1;
    }

    else
         return  factorial(num-1)*num; 
}

var result = factorial(6);
console.log(result); 