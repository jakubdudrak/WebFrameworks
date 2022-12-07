const request = require('request');
const mongoose = require('../models/db');
require('../models/account');
const Acc = mongoose.model('Accounts');

const apiOptions = { 
    server : 'http://localhost:3000' 
    }; 

if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://revolt-app.onrender.com/'; 
    }

const homelist = function(req, res){
    const path = '/api/dashboard/:id'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {},
    qs : {
        account: 'Jakub'
        } 
    }; 

    request(requestOptions, (err, response, body) => { 
        _renderDash(req, res); 
        } 
    );

};


const getAccount = async function (req, res) {
  let accountGet;
  let contact;
  if (req.params && req.params.id) {
      await Acc
      .findOne({'accountID': req.params.id})
      .exec((err, account) => {
        if (!account) {
          res	
            .status(404) 
            .json({	
              "message": "user not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res	
            .status(200) 
            .json(account); 
      });
  } else {		
    return res		
      .status(404) 	
      .json({	
        "message": "No id in request"
      });		
  }
 };

 const _renderDash = function(req, res, body){
    res.render('dashboard', { title: 'Revolt', account: body });
 };

const topUp = function(req, res){
  let amount = req.body.topUps;
  let username = req.body.accid
  Acc.findOneAndUpdate({accountID: username}, {$inc: {balance: amount}}, {new: false}, (err, account) => {
    if (err) 
      return res.status(500).send(err);  
    account.save();
    res.redirect('/dashboard/' + account.accountID);
  });

}

const sendMoney = function(req, res){
    let amount = req.body.amount;
    let receiver = req.body.contactID;
    let sender = req.body.senderID;

    Acc.findOneAndUpdate({accountID: sender}, {$inc: {balance: -amount}}, {new: false}, (err, account) => {
        if (err) 
          return res.status(500).send(err);
        if(account.balance < amount){
          return;
        }
        account.save();
    }
    );
    Acc.findOneAndUpdate({accountID: receiver}, {$inc: {balance: amount}}, {new: false}, (err, account) => {
      if (err) 
        return res.status(500).send(err);
      account.save();
  }
  );
  res.redirect('/dashboard/' + sender);
}
const addContact = function(req, res){
  let contact = req.body.username;
  let username = req.body.accid;
  Acc.findOne({accountID: username}, (err, account) => {
    if (err) 
      return res.status(500).send(err);
    account.contacts.push(contact);
    account.save();
});
}

module.exports = {
  sendMoney,
  addContact,
  getAccount,
  sendMoney,
  topUp
}