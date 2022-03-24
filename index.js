const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();


//engine setup
app.set('view engine', 'ejs');

//Middlewares for bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


 //Initial routes
 app.get('/', (req, res) =>  res.render('index'));
    

app.listen(port, (req, res) => console.log(`Server is running at ${port}`));