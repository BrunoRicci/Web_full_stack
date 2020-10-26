'use strict';


var box = $('#box');

box.show('hello');



// $(document).mousemove(()=>{ //When mouse moves...
//     console.log(a);
//     console.log(b);
//     console.log(event.clientX, event.clientY);
// });

var cont = $("#container");
// console.log('container:',cont);


$(document).ready(()=>{
    console.log('a',$('a'));

    updateList();
});

$("#add_button").click(()=>{
    var input = $('#link_input').val();

    console.log('<li> <a href="'+input+'"></a> </li>');

    $('#container').append('<li> <a href="'+input+'"></a> </li>');
    updateList();
});

function updateList(){
    $('a').each((i,v)=>{
        v.text = v.href;
    });
}

// cont.map((v, i)=>{
//     console.log(v, i);
// });
