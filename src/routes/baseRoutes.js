'use strict';
const express = require('express');
const home = require('../Controllers/baseController');

const baseRouter= express.Router();

baseRouter.route('/').get(home);

module.exports = baseRouter;