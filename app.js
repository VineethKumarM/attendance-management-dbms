const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res ) => {
    console.log("We got a new request");   
    res.send({
        color: 'blue'
    })
})

app.get('/h/:place', (req,res)=> {
    const {place} = req.params;
    res.send(`Welcome ${place}`)
})

app.get('*', (req,res)=> {
    res.send("Uh oh! You missed your way home")
})

app.listen(8080, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})