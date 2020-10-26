'use strict'


var form = document.querySelector("#form");



form.addEventListener('submit', function() {
    console.log("Data submitted.");
    
    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var age = parseInt(document.querySelector("#age").value);
    console.log(age);
    
    if (typeof(name) == 'string' && 
        typeof(surname) == 'string' &&
        !isNaN(age)
        ){
        console.log(name, surname, age);
    } 
    else{
        alert("Invalid data.");
    }

    
});