const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
  }
});

mongoose.model('Contact', contactSchema);