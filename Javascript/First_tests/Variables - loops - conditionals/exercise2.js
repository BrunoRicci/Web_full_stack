
/* 
    Program that asks for 2 mumbers and say which one 
    is greater and lower, or if they are equal.
*/

var num=0, q=0, sum=0;

while(num >= 0){
    do{
      num = parseInt(prompt("Enter a number"));  
    }while(isNaN(num));     //Asks again if is not a number.
    
    if (num >= 0) {
        sum += num; 
        q++;
    }
}

console.log(sum,  q);

console.log("Average: "+(sum/q));
