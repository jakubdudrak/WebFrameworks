const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlSignup = require('../controllers/signup');
const ctrlDash = require('../controllers/dashboard');


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/signup', ctrlSignup.signup);
router.get('/dashboard', ctrlDash.dashboard);
module.exports = router;
