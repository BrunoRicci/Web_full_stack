'use strict'

var express = require('express');
var body_parser = require('body-parser');

var app = express();    //ExpressJS

//Load routes file
var project_routes = require('./routes/project');

//middlewares
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes:
app.use('/api', project_routes);


/* routes
app.get('/', (req,res)=>{
    res.status(200).send('Hello world!');
});

app.get('/test', (req,res)=>{
    res.status(200).send('TEST PATH');
});

app.post('/testpost', (req,res)=>{
    // console.log(req.query,req.body);
    let name = req.body.name;
    let age = req.body.age;
    console.log('params:',name,age);

    // res.status(200).send(`POST REQUEST RECEIVED.`);
    res.status(200).send(`POST REQUEST RECEIVED. \nName: ${name} \nAge:${age}`);
}); */




module.exports = app;