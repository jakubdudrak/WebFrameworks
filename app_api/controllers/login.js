const render = function (req, res) {
    res.render('index', { title: 'Express' });
   };
  
  
  module.exports = {
    render
  };