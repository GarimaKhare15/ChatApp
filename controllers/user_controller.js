const User = require('../models/user');
module.exports.logIn = function (req,res){
    return res.render('user_log_in');
}

module.exports.signUp = function (req,res){
    return res.render('user_sign_up');
}


module.exports.cs = function(req, res){
    return res.render('temp');
}

//get the sign up form data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}
                console.log('User created successfully');
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }

    });
}
