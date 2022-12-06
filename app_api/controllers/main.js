const request = require('request');

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

const getUser = function(userID){

  

}

const _renderDash = function (req, res) {
  res.render('dashboard', { title: 'Express' });
 };


module.exports = {
  render
};