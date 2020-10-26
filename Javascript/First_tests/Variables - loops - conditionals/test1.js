
/* 
    Program that asks for 2 mumbers and say which one 
    is greater and lower, or if they are equal.
*/

var a,b;

do{
    a = prompt("Enter the first number:");
    b = prompt("Enter the second number:");
}while(isNaN(a) || isNaN(b));

    
    if (a > b) {    //if first greater than second
    alert("The first number ({a}) is the greatest.".replace("{a}",a));
    alert("The second number ({b}) is the lowest.".replace("{b}",b));
}
else if (a<b) { //if first lower than second
    alert("The second number ({b}) is the greatest.".replace("{b}",b));
    alert("The first number ({a}) is the lowest.".replace("{a}",a));
}
else{       //If equals
    alert("Both numbers are equal");
}
