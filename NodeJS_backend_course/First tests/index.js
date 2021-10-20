
var fs = require('fs');

console.log('hello');

var text = fs.readFileSync('./sometext.txt', 'utf-8');
console.log(text);  //Shows content of the file

var data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
console.log('Name:',data.name);
console.log('Sports:',data.params.sports);

var textOut = "This is the text to be written";
fs.writeFileSync('./writtenfile.txt', textOut);