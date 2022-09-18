const express = require('express');
const router = express.Router();
const rentItemController = require('../controller/rentItem');
const authUtil = require('../config/jwt/auth').checkToken;
const authAdmin = require('../config/jwt/auth').authAdmin;
const authRental = require('../config/jwt/auth').authRental;
const authEdit = require('../config/jwt/auth').authEdit;
const authOpen = require('../config/jwt/auth').authOpen;

/* GET home page. */
router.post('/rent', authUtil, authRental, rentItemController.rentItem);

module.exports = router;
