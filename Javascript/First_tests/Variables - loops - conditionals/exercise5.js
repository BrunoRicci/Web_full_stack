
/* 
    Program that asks for 2 mumbers and say which one 
    is greater and lower, or if they are equal.
*/

var number;

do{ //Asks for 2 numbers.
    number = parseInt(prompt("Enter the number"));  
   
}while(isNaN(number));     //Asks again if is not a number.

document.write("<h4>Dividers of "+ number +":</h4>");
for (let i = 1; i <= number; i++) {
    
    if (number%i == 0) {
        console.log(i);
        document.write(i+"<br>");
    }

}

