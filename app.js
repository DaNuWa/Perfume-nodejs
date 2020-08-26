const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const authroutes=require('./routes/authroutes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.use(authroutes);

 

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })