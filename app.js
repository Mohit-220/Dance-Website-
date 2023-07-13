const express = require ('express');
const app= express();
const path= require('path');
const port=8000;

// Express
app.use('/static',express.static('static'));
app.use(express.urlencoded());



// PUG
// set template
app.set('view engine', 'pug')


// set views directory
app.set('views',path.join(__dirname,'views'))


// Endpoints

app.get('/',(req,res)=>{
    const par= {}
    res.status(200).render('home.pug',par)
})
app.get('/contact',(req,res)=>{
    const par= {}
    res.status(200).render('contact.pug',par)
})

app.listen(port,()=>{
    console.log("Website 80");
})