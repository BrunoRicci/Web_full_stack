'use strict';

var usuarios = [];

fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(data => {
        usuarios = data;
        
        console.log(usuarios.data);

        var list = document.querySelector('#list');
        console.log("Style:",list.style);
        // list.style = "display: inline";

        var user_array = usuarios.data.map( (user, i) =>{
            // console.log(users[i]);
            console.log(user, i);
            let box = document.createElement('div');
            box.id = "box";
            box.style = "display: inline";
            
            let item = document.createElement('h1');
            item.style = "width: 50%; display: inline";

            item.innerHTML = i + ") " +  user.last_name.toUpperCase() +", " + user.first_name;
            
            let avatar = document.createElement('img');
            avatar.style = "margin: 0px 10px ;";
            avatar.src = user.avatar;
            
            box.appendChild(avatar);
            box.appendChild(item);
            box.appendChild(document.createElement("br"));
            list.appendChild(box);
            // box.appendChild(avatar);
            // console.log('asd');
            // box.appendChild(name);
        } );
        
        console.log(user_array);
    });