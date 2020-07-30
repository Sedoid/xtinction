const express = require('express')
const router = express.Router();
const getData = require('../util/getData');
const request = require('request');


router.get('/', (req,res)=>{
    res.send('data hungry aleady...........right')
})

router.use(getData)

module.exports = router