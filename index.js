const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy.js');

app.use(express.urlencoded());
// setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(express.static('./assests'));

//use express router

app.use('/', require('./routes'));


/*app.get('/',function(req,res){
    res.render('user_log_in');
})*/

//for testing the server is working properly
/*app.get('/',function(req,res) {
    res.send('Hello, world!');
})*/

app.listen(PORT, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${PORT}`);
})