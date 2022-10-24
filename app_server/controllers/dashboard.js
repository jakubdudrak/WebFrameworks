/* GET home page */
const dashboard = function(req, res){
  res.render('dashboard', { 
    name: "Jakub Dudrak",
    balance: 100,
    contacts: [ {
      name: "Hector Salamanca",
    }, {
      name: "Walter White",
    }, {
      name: "Walter White Jr",
    },  {
      name: "Skylar White",
    },  {
      name: "Jesse Pinkman",
    },  {
      name: "Jimmy McGill",
    } ]
  });
};

module.exports = {
  dashboard
};