const express = require('express')
const router = express.Router();
const getData = require('../util/getData');
const request = require('request');


router.get('/', (req,res)=>{
    res.send('data hungry aleady...........right')
})

router.get('/all',async(req, res) =>{
    const data = await getData()
    request('https://storage.scrapinghub.com/items/462761/2/1?apikey=4b125c7a646745a8b95bda989bf28573&format=json&saveas=items_extinct_1.json')
    .pipe(res);
})

module.exports = router