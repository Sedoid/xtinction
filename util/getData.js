const fs = require('fs')
const path = require('path')
const request = require('request');
const jsonFile = require('jsonfile');
const filename = path.join(__dirname,'../','data','filename.json')


const getData = (req,res,next) =>{

    console.log(req.url)

if (req.url == '/all'){

    let stream = fs.createWriteStream(filename)
    request('https://storage.scrapinghub.com/items/462761/2/1?apikey=4b125c7a646745a8b95bda989bf28573&format=json&saveas=items_extinct_1.json')
    .pipe(stream);

    stream.on('finish',()=>{
        let data = jsonFile.readFileSync(path.join(__dirname,'../','data','filename.json'));

        res.send(data)
        next()
    })

}
   
// https://storage.scrapinghub.com/items/462761/2/4?apikey=4b125c7a646745a8b95bda989bf28573&format=json&saveas=items_extinct_4.json
}

module.exports = getData