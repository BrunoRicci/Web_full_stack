'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name:String,
    description:String,
    category:String,
    year:Number,
    langs:[String]
});

module.exports = mongoose.model('Project', ProjectSchema);  //Saves documents in the collection. (db linking)