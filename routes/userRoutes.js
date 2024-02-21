// routes/userRoutes.js
const express = require('express');

//Required models
const { getUserInfo } = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken'); 

const router = express.Router();

// Route to get user information
router.get('/get-info', authenticateToken, getUserInfo);

module.exports = router;
