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

const loginRouter = require("./src/routes/loginRoutes");
const homesRouter = require('./src/routes/homeRoutes');
const wheresRouter = require('./src/routes/whereRoutes');
const placeRouter = require("./src/routes/addplaceRoutes");

app.use('/loginadmin', loginRouter);
app.use('/index', homesRouter);
app.use('/offers', wheresRouter);
app.use('/addplace', placeRouter)();

app.get('/', (req, res) => {
    res.render('index')
});


app.get('/login', (req, res) => {
    res.render('login');
});


app.get('/addplace', (req, res) => {
    res.render('addplace.ejs')
})




app.use(express.static("public"));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.listen(3032, (req, res) => {
    console.log('listening to port' + chalk.blue('3032'))
});