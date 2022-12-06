const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profilePicture: {
    data: Buffer,
    dataType: String
  },
  accountID: {
      type: Number,
      required: true
  },
  balance: {
      type: Number,
      required: true
  },
  contacts: [{
    name:{required: true, type: String},
    profilePicture: {data: Buffer, dataType: String},
    accountID: {required: true, type: Number},
    balance: {required: true, type: Number}
  }]
});




mongoose.model('Accounts', accountSchema, 'accounts');