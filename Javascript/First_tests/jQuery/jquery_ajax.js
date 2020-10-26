'use strict';


$(document).ready(function(){
    // $('#data').load("https://reqres.in/api/users");
    
    // $('#data').load("https://reqres.in/");

            //URL                       //request data      //response data
    $.get('https://reqres.in/api/users', {page: 1}, function(response){
        console.log(response);

        response.data.forEach( (e,i)=>{     //Show each element.
            // console.log(e,i);
            $('#data').append(
                "<p>"+e.first_name+" "+e.last_name+"</p>"
            );
        }); 
    });

    var payload = {
        name: $('input[name="name"]').val(),
        surname: $('input[name="surname"]').val()
    }

    // $.post('https://reqres.in/api/users', payload, function(response){
    //     console.log(response);
    // });  //Works OK!.

    $('#form').submit(function(e){
        e.preventDefault();

        // $.post($(this).attr("action"), payload, function(response){
        //     console.log(response);
        // });  //Works OK!.

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: payload,
    
            beforeSend: function(){
                console.log('Sending request...');
            },
            success: function(response){
                console.log('Response:',response);
            },
            error: function(){
                console.log('An error has ocurred.');
            },
            timeout: 2000
        });

    });

    
     


});