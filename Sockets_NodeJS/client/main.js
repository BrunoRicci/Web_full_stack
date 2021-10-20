var socket = io.connect('http://192.168.0.172:6677',{'forceNew':true});

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){

    var current_container_class;
    var current_message_class;

    var html = data.map((m)=>{
        
        if(m.nick == document.querySelector('#nickname').value){
            current_container_class='msg_container own';
            current_message_class='message own'
        } else{
            current_container_class='msg_container';
            current_message_class='message'
        }
        return(`
        <div class="${current_container_class}">    
        <div class="${current_message_class}">
                <strong>${m.nick}:</strong>
                <br>
                ${m.message}
        </div>
        </div>
        `);
    }).join(' ');

    var messages = document.querySelector('#messages_section');
    messages.innerHTML = html;
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage(e){
    var message = document.querySelector('#message').value;
    var nick = document.querySelector('#nickname').value;
    var data = {
        id: 0,
        nick: nick,
        message: message
    }

    console.log('message sent:', data);
    socket.emit('new-message', data);

    return false;
}