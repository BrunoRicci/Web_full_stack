const fs = require('fs');
const sv = require('http').createServer();

sv.on('request', (req,res)=>{

    // fs.readFile('./datafile.txt', (err, data)=>{
    //     if(err) throw err;
        
    //     res.end(data);
    // })

    const readable = fs.createReadStream('./datafile.txt');
    readable.on('data', (chunk)=>{
        res.write(chunk);
    })
    readable.on('end', ()=>{
        res.end();
    })
});

sv.listen(8080, ()=>{
    console.log('Sv listening on port 8080');
})