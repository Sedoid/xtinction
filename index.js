const express = require('express');
const dataRoute = require('./routes/animal')

const app = express();

app.get('/',(req, res)=>{
    res.send('Collect Xtinction Data')
})

app.use('/data',dataRoute)

// process.env.PORT

app.listen(3000,()=>{
    console.log('Server running on port 3000')
})

