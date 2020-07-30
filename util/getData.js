const fs = require('fs')
const path = require('path')
const request = require('request');
const jsonFile = require('jsonfile');
const filename = path.join(__dirname,'../','data','filename.json')


const getData = async() =>{
    // let stream = fs.createWriteStream(filename)
    // await request('https://storage.scrapinghub.com/items/462761/2/1?apikey=4b125c7a646745a8b95bda989bf28573&format=json&saveas=items_extinct_1.json')
    // .pipe(stream);

    // console.log('done')
    // let data = jsonFile.readFileSync(path.join(__dirname,'../',filename));
    // console.log('read')
    // return data
// https://storage.scrapinghub.com/items/462761/2/4?apikey=4b125c7a646745a8b95bda989bf28573&format=json&saveas=items_extinct_4.json
}

// console.log(getData())
module.exports = getData