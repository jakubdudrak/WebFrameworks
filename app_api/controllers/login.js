
const _renderHomepage = function(req, res, responseBody){ 
    res.render('index', {
    title: 'Revolt'});
    };
  
  
  module.exports = {
    _renderHomepage
  };