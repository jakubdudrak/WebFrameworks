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
  }
});

const contactSchema = new mongoose.Schema({
  accountID: {
      type: Number,
      required: true
  },
  contacts: [accountSchema]
});

mongoose.model('Contact', contactSchema);

mongoose.model('Account', accountSchema);