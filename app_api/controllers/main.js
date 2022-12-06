const render = function (req, res) {
  res.render('dashboard', { title: 'Express' });
 };


module.exports = {
  render
};