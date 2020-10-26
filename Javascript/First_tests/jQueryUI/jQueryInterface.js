'use strict'



$(document).ready(function(){
    console.log('hello');
    var allboxes = $('.box');

    allboxes = $('.box').draggable();
    allboxes = $('.box').resizable();
    // allboxes = $('.box').droppable();
    console.log(allboxes);

    $('#calendar').datepicker();


    $('#list').sortable({
        update: function(){
            var items = $(this).find('li');
            
            for (const key in items) {  //List items in order.
                if (items.hasOwnProperty(key)) {
                    console.log(items[key].textContent);
                }
            }
        }
    });
    
    $('#toggle_effect').click(()=>{
        $('#effects').toggle('scale', 1000);
    });

    $('#btn_popup').click(()=>{
        $('#popup').dialog();
    });


});
