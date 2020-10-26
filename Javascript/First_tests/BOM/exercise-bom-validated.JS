'use strict'




var movie = {
    title: 'Toy story 2',
    year: 2000,
    producer: 'Pixar'
};

console.log(movie);
console.log("asd");




var form = document.querySelector("#form");



form.addEventListener('submit', function() {
    console.log("Data submitted.");
    
    var name = document.querySelector("#name").value.trim();
    var surname = document.querySelector("#surname").value.trim();
    var age = parseInt(document.querySelector("#age").value);
    console.log(age);
    
    if (typeof(name) == 'string' && name.length > 0 &&
        typeof(surname) == 'string' && surname.length > 0 &&
        !isNaN(age) && age > 0
        ){
        console.log(name, surname, age);
    }
    else{
        alert("Invalid data.");
    }

    
});
