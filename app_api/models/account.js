const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  },
  accountID: {
      type: String,
      required: true
  },
  balance: {
      type: Number,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  contacts: [{
    name:{required: true, type: String},
    profilePicture: {type: String},
    accountID: {required: true, type: Number},
    balance: {required: true, type: Number}
  }]
});




mongoose.model('Accounts', accountSchema, 'accounts');