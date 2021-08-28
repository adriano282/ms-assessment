const express = require('express');

const mongoDb = require('mongoose');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const assessmentRoutes = require('./routes/assessment');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(assessmentRoutes);

mongoDb
    .connect('mongodb://localhost:27017/test?useNewUrlParser=true')
    .then( () => {console.log('connected mongodb!')})
    .catch( err => {console.log(err)});

app.listen(3000);

