const express = require('express');
const router = express.Router();
const ctrlDashboard = require('../controllers/main');
const ctrlSignup = require('../controllers/signup');
const ctrlLogin = require('../controllers/login');
const mongoose = require('../models/db');
require('../models/account');
const Acc = mongoose.model('Accounts');

router
  .route('/dashboard/:id')
  .get(async (req, res) => {
    const account = await Acc.findOne({'accountID': req.params.id});
    console.log(account);
    res.render('dashboard', { account: account });
  })
  .post(ctrlDashboard.sendMoney);

router
  .route('/')
  .get(ctrlLogin._renderHomepage);

router.get('/signup', ctrlSignup._renderSignup);
router.post('/createAccount', ctrlSignup.signup);
router.post('/sendMoney', ctrlDashboard.sendMoney);

router.post('/login', ctrlLogin.loginValid);

module.exports = router;