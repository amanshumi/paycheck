const express = require('express');

// Import express-validator
const { body } = require('express-validator');

//JWT Middleware
const authenticateToken = require('../middleware/authenticateToken'); 

//Required controllers functions
const { getGroupsInfo  } = require('../controllers/groupController.js');

const router = express.Router();

// Route to get groups information
router.get('/get-groups', authenticateToken, getGroupsInfo);

module.exports = router;