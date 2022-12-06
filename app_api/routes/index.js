const express = require('express');
const router = express.Router();
const ctrlDashboard = require('../controllers/main');
const ctrlSignup = require('../controllers/signup');
const ctrlLogin = require('../controllers/login');

router
  .route('/dashboard')
  .get(ctrlDashboard._renderDash)

router
  .route('/')
  .get(ctrlLogin._renderHomepage)

module.exports = router;