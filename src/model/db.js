//MONGOOSE
const mongoose = require('mongoose');
// const uri = "mongodb://localhost/testdb";
const url = "mongodb+srv://njay:101996@wheretogo1-9u2yv.mongodb.net/test?retryWrites=true"
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to database!")


});

// When the connection is disconnected
db.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS // For example 

require('../model/wheretogo1')