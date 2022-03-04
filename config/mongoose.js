const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat_application');

const db = mongoose.connection;

db.on('error',console.error.bind('Error connecting to database:',console.error));


db.once('open',function(){
    console.log('Successfully connected to database!');
})

module.exports = db;