'use strict';


$(document).ready( ()=>{
var btn = $("#btn_show_hide");
var box = $("#box");


btn.click(function(){
    console.log('click');
    
    

    if (box.css('display') != 'none') {

        box.hide();
        box.animate( {marginLeft: '0'}, 'normal' );
    }
    else{
        box.show();
        box.animate( {marginLeft: '250px', opacity:'1'},  1500, ()=>{
            console.log('Animation finished.');
        } );

    }

   
    })
});

