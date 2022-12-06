const mongoose = require('mongoose');
let dbURI = 'mongodb+srv://mongodb:mongodb@cluster0.wkxlknd.mongodb.net/RevoltApp?retryWrites=true&w=majority';
 
mongoose.connect(dbURI,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('connected');
     }
    }
);

module.exports = mongoose;
require('./account');