const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authroutes=require('./routes/authroutes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use(authroutes);

mongoose.connect('mongodb+srv://yohan:abc@123@cluster0.is70t.mongodb.net/perfume?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(() => {
   app.listen(3000);
})
.catch(err => { // mongoose connection error will be handled here
    console.error('App starting error:', err.stack);
    process.exit(1);
});

