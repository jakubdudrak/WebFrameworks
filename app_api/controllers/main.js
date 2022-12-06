const request = require('request');
const mongoose = require('mongoose');
require('../models/account');
const Acc = mongoose.model('Account');
const Con = mongoose.model('Contact');

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



    
const checkContactsNull = function(contacts){
  //if (contacts)
}


const _renderDash = function (req, res) {
  let accountDetails
  Acc.findOne({'accountid': '0'}, (err, account) => {
    if (err) console.log(err);
    accountDetails = account;
  })
  let contactDetails
  Con.findOne({'accountid': '0'}, (err, contact) => {
    if (err) console.log(err);
    contactDetails = contact;
  });
  console.log(accountDetails);
  console.log(contactDetails);
  res.render('dashboard', { title: 'Express', 'name': accountDetails.name, 'profilePicture': accountDetails.profilePicture, 'contacts': contactDetails });
 };


module.exports = {
  _renderDash
};