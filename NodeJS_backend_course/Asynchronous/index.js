const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file, (err,data)=>{
            if(err) reject('Couldn\'t open file');
            resolve(data);
        })
    })
}

// fs.readFile(`${__dirname}/dog.txt`, (err, data)=>{
//     console.log(`breed: ${data}`);

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then((res)=>{
//             console.log(res.body);
//         }).catch((err)=>{
//             console.log(err);
//         })
// })

readFilePro(`${__dirname}/dog.txt`).then((data)=>{
    console.log(`breed: ${data}`);

    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((res)=>{
            console.log(res.body);
        }).catch((err)=>{
            console.log(err);
        })
}).catch((err)=>{
    console.log('error:', err);
})