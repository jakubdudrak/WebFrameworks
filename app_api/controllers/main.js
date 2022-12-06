const request = require('request');
const mongoose = require('mongoose');
require('../models/account');
const Acc = mongoose.model('Accounts');
const Con = mongoose.model('Contacts');

const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 

if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://revolt-app.onrender.com/'; 
    }

const homelist = function(req, res){
    const path = '/api/main'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {}, 
    }; 

    request(requestOptions, (err, response, body) => { 
        _renderDash(req, res); 
        } 
    );

};

const _renderDash = function (req, res) {
  let accountDetails =
    Acc.where('accountID').equals('0').exec((err, account) => 
    {if (err) console.log(err);});
  
  let contactDetails = 
    Con.where('accountID').equals('0').exec((err, contacts) => {if (err) console.log(err);});

  console.log(accountDetails + "Hello");
  console.log(contactDetails);
  res.render('dashboard', { title: 'Express', 'name': accountDetails.name, 'profilePicture': accountDetails.profilePicture, 'contacts': contactDetails });
 };


module.exports = {
  _renderDash
};