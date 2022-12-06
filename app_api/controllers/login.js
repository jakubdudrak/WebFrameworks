const mongoose = require('../models/db');
require('../models/account');
const Acc = mongoose.model('Accounts');

const _renderHomepage = function(req, res, responseBody){ 
    res.render('index', {
    title: 'Revolt'});
    };
  
const loginValid = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
     Acc.findOne({'accountID': username}, function(err, account){
        if(account != null){
            if(account.password == password){
                res.redirect('/dashboard/'+ username);
            } else {
                res.render('index', {title: 'Revolt', error: 'Incorrect Password'});
            }
        }
    });
};
  
  module.exports = {
    _renderHomepage,
    loginValid
  };