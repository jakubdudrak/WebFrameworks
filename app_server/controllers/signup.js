const request = require('request');
const request = require('request');
const apiOptions = { 
server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://pure-temple-67771.herokuapp.com'; 
}
const requestOptions = { 
  url : 'http://yourapi.com/api/path', 
  method : 'GET', 
  json : {}, 
  qs : { 
  offset : 20 
  } 
  }; 
const signup = function(req, res){
  res.render('signup', { title: 'Express' });
};

module.exports = {
    signup
};