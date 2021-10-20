const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('some_event', (data)=>{
    console.log('Some event happened!');
    console.log('data:', data);
})


myEmitter.on('other_event', ()=>{
    console.log('other event happened!!!');
})

myEmitter.emit('some_event', {a:1,b:2});