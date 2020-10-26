
/* 
    Program that asks for 2 mumbers and say which one 
    is greater and lower, or if they are equal.
*/

var start_number,end_number;

do{ //Asks for 2 numbers.
    start_number = parseInt(prompt("Enter the starting number"));  
    end_number = parseInt(prompt("Enter the ending number"));  
}while(isNaN(start_number) || isNaN(end_number) || start_number > end_number);     //Asks again if is not a number.

document.write("<h4>Numbers from "+ start_number + " to " + end_number + ":</h4>");
for (let i = start_number; i <= end_number; i++) {
    
    if (i%2 != 0) {
        console.log(i);
        document.write(i+"<br>");
    }

}

