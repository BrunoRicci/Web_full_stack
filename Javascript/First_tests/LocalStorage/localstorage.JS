'use strict'



var input = document.querySelector("#movie_name");


function showMovies(){
    var box = document.querySelector("#movies_list");
    var movies_list = localStorage;
    box.innerHTML='';    //Clear content
    for (var i in movies_list) {
        
        if(typeof(movies_list[i]) == 'string'){
           //Get only valid data.
            var item = document.createElement("li");        
            item.append(movies_list[i]);
            
            box.append(item);
        } 
    }
}

document.querySelector("#form_add_movie").addEventListener('submit',function(){
    var movie = input.value;
    if(movie.length > 0){
        localStorage.setItem(movie, movie);
        console.log( `Movie ${movie} added`);
        movie=""; //Clear value
    }

    /* var obj_data = JSON.stringify({
        "movie_name": input.value
    });
    localStorage.setItem("movie",obj_data); */

    showMovies();
});


document.querySelector("#form_delete_movie").addEventListener('submit',function(){
    var movie = document.querySelector("#delete_movie_name").value;
    if(movie.length > 0){
        localStorage.removeItem(movie, movie);
        console.log( `Movie ${movie} deleted`);
        movie=""; //Clear value
    }

    showMovies();
});     