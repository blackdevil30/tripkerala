const express = require('express');
var app = new express();

const chalk = require('chalk');
const path = require('path');
var URL = require('url');
const ejsLint = require('ejs-lint');
const db = require('./src/model/db');
Server = require('mongodb').Server;


const where = require('./src/model/wheretogo1');

app.use(express.static(path.join(__dirname, "/public")))
app.engine('html', require('ejs').__express);

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const loginRouter = require("./src/routes/loginRoutes")();
const homesRouter = require('./src/routes/homeRoutes');
const wheresRouter = require('./src/routes/whereRoutes');


app.use('/login', loginRouter);
app.use('/index', homesRouter);
app.use('/offers', wheresRouter);
app.get('/', (req, res) => {
    res.render('index')
});

// app.get('/', (req, res) => {
//     res.render('login', {

//         err: ""
//     });
// });
app.get('/offers', (req, res) => {
    res.render('offers')
});



app.use(express.static("public"));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.listen(3029, (req, res) => {
    console.log('listening to port' + chalk.blue('3029'));
});