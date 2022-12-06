const mongoose = require('../models/db');
require('../models/account');
const Acc = mongoose.model('Accounts');

const _renderSignup = function(req, res) {
    res.render('signup', { title: 'Revolt' });
    }

const signup = function(req, res){
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.text;
    let profilePicture = req.body.url;
    let balance = 0;
    let contacts = [];
    let account = new Acc({
        name: name,
        profilePicture: profilePicture,
        accountID: username,
        balance: balance,
        password: password,
        contacts: contacts
    });
    account.save(function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.redirect('/');
        }
    });
}

module.exports = {
    _renderSignup,
    signup
}