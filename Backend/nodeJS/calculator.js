'use strict'

var args = process.argv.slice(2);       //slice(start_index, end_index)

console.log(args);

var sum = parseInt(args[0])+parseInt(args[1]);

console.log('The sum is:'+sum);