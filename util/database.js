const mongoDb = require('mongoose');

mongoDb
    .connect('mongodb://localhost:27017/test')
    .then( () => {console.log('connected mongodb!')})
    .catch( err => {console.log(err)});

module.exports = mongoDb;